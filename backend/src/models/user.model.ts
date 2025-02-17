import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: "user" | "admin";
    refreshToken?: string;
    resetPasswordToken?: string;
    resetPasswordTokenExpiry?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    refreshToken: String,
    resetPasswordToken: String,
    resetPasswordTokenExpiry: Date
}, { timestamps: true, versionKey: false });

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 10);
    }
    next();
})

const User = model('User', userSchema);
export default User;