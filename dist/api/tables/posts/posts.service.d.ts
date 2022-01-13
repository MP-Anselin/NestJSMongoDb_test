import { Model } from "mongoose";
import { Post, PostDocument } from "./schemas/post.schema";
import { CreatePostDto } from "./dto/create-post.dto";
import { UsersService } from "../users/users.service";
import { UpdatePostDto } from "./dto/update-post.dto";
export declare class PostsService {
    private postModel;
    private usersService;
    constructor(postModel: Model<PostDocument>, usersService: UsersService);
    create(newPostInfo: CreatePostDto): Promise<Post>;
    findAll(): Promise<(Post & Document & import("mongoose").Document<any, any, PostDocument>)[]>;
    findOne(_id: string): Promise<Post & Document & import("mongoose").Document<any, any, PostDocument>>;
    update(_id: string, updatePostDto: UpdatePostDto): Promise<Post & Document & import("mongoose").Document<any, any, PostDocument>>;
    remove(id: string): Promise<Post & Document & import("mongoose").Document<any, any, PostDocument>>;
}
