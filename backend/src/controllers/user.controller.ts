/** @format */

import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler.ts';
import { ApiResponse } from '../utils/ApiResponse.ts';
import { ApiError } from '../utils/ApiError.ts';
import User from '../models/user.model.ts';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { Types } from 'mongoose';
import { sendMail } from '../utils/sendMail.ts';

interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

const generateAccessAndRefreshToken = async (
  userId: Types.ObjectId,
): Promise<TokenResponse> => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    const accessToken: string = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET!,
      { expiresIn: '1d' },
    );

    const refreshToken: string = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET!,
      { expiresIn: '30d' },
    );

    user.refreshToken = refreshToken;
    await user.save();

    return { accessToken, refreshToken };
  } catch (error) {
    console.error('Error generating tokens', error);
    throw new Error('Failed to generate tokens');
  }
};

export const register = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { firstName, lastName, email, password } = req.body;

    if (
      [firstName, lastName, email, password].some(
        (field) => !field || field.trim() === '',
      )
    ) {
      throw new ApiError(400, 'All fields are required.', [
        'firstName',
        'lastName',
        'email',
        'password',
      ]);
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new ApiError(400, 'User already exists.', ['email']);
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    res
      .status(201)
      .json(new ApiResponse(201, user, 'User created successfully.'));
  },
);

export const login = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    if ([email, password].some((field) => !field || field.trim() === '')) {
      throw new ApiError(400, 'All fields are required.');
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new ApiError(404, 'User not found.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new ApiError(401, 'Invalid credentials.');
    }

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    };

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      new Types.ObjectId(user._id),
    );

    res
      .status(200)
      .cookie('accessToken', accessToken, {
        ...cookieOptions,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .cookie('refreshToken', refreshToken, {
        ...cookieOptions,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      })
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken },
          'Login successful.',
        ),
      );
  },
);

export const logout = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const userId = req.user?._id;

    await User.findByIdAndUpdate(userId, { refreshToken: null });

    res
      .status(200)
      .cookie('accessToken', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 0,
      })
      .cookie('refreshToken', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 0,
      })
      .json(new ApiResponse(200, null, 'Logout successful.'));
  },
);

export const getUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    if (!req.user) {
      throw new ApiError(401, 'Unauthorized.');
    }

    const user = await User.findById(req.user?._id);

    if (!user) {
      throw new ApiError(404, 'User not found.');
    }

    const cleanedUser = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };

    res
      .status(200)
      .json(
        new ApiResponse(200, cleanedUser, 'User details fetched successfully.'),
      );
  },
);

export const refreshAccessToken = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const incomingRefreshToken =
      req.cookies?.refreshToken || req.body.refreshToken;

    if (!incomingRefreshToken) {
      throw new ApiError(401, 'Unauthorized access');
    }

    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.JWT_SECRET!,
    ) as { id: string };

    const user = await User.findById(decodedToken.id);

    if (
      !user ||
      !user.refreshToken ||
      user.refreshToken !== incomingRefreshToken
    ) {
      throw new ApiError(401, 'Unauthorized access');
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      new Types.ObjectId(user._id),
    );

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    };

    res
      .status(200)
      .cookie('accessToken', accessToken, {
        ...cookieOptions,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .cookie('refreshToken', refreshToken, {
        ...cookieOptions,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      })
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken },
          'Access token refreshed successfully.',
        ),
      );
  },
);

export const forgotPassword = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { email } = req.body;

    if (!email) {
      throw new ApiError(400, 'Email is required.');
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new ApiError(404, 'User not found.');
    }

    const resetPasswordToken = crypto.randomBytes(20).toString('hex');

    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordTokenExpiry = new Date(Date.now() + 15 * 60 * 1000);
    await user.save();

    // TODO: Send email
    await sendMail(
      email,
      'Reset Password',
      `
            <h1>Reset Password</h1>
            <p>Click <a href="http://localhost:3000/reset-password/${resetPasswordToken}">here</a> to reset your password.</p>
            <p>This link will expire in 15 minutes.</p>
            
            <p>If the above link is not working in your browser, copy and paste the following link: http://localhost:3000/reset-password/${resetPasswordToken}</p>
        `,
    );

    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          null,
          'Reset password token generated successfully.',
        ),
      );
  },
);

export const resetPassword = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { password } = req.body;
    const { token } = req.params;

    if (!password || !token) {
      throw new ApiError(400, 'All fields are required.');
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordTokenExpiry: { $gt: new Date() },
    });

    if (!user) {
      throw new ApiError(400, 'Invalid or expired token.');
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpiry = undefined;
    await user.save();

    res
      .status(200)
      .json(new ApiResponse(200, null, 'Password reset successful.'));
  },
);
