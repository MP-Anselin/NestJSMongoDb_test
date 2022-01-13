import { Types } from "mongoose";
export declare type PostDocument = Post & Document;
export declare class Post {
    userId: Types.ObjectId;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const PostSchema: import("mongoose").Schema<import("mongoose").Document<Post, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
