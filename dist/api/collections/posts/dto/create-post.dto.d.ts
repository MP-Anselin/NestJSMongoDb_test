import { Types } from "mongoose";
export declare class CreatePostDto {
    userId: Types.ObjectId | string;
    title: string;
    description: string;
}
