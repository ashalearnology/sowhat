import { Schema, Types, model } from "mongoose";

export interface IUserAddress {
    user: Types.ObjectId;
    fullName: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    isDefault: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

const userAddressSchema = new Schema<IUserAddress>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
    isDefault: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true, versionKey: false });

const UserAddress = model<IUserAddress>("UserAddress", userAddressSchema);
export default UserAddress;