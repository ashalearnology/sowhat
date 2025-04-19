/** @format */

import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadOnCloudinary = async (localFilePath: string) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto',
    });

    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    console.error('Upload failed:', error);
  }
};

export const deleteFromCloudinary = async (filePath: string) => {
  try {
    const result = await cloudinary.uploader.destroy(filePath);
    console.log('Image deleted from Cloudinary:', result);
  } catch (error: any) {
    console.log('Error while deleting the file: ', error.message);
  }
};
