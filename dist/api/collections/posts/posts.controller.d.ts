/// <reference types="mongoose" />
import { PostsService } from "./posts.service";
import { Post as postTable } from "./schemas/post.schema";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<postTable>;
    findAll(): Promise<(postTable & Document & import("mongoose").Document<any, any, import("./schemas/post.schema").PostDocument>)[]>;
    findOne(id: string): Promise<postTable & Document & import("mongoose").Document<any, any, import("./schemas/post.schema").PostDocument>>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<postTable & Document & import("mongoose").Document<any, any, import("./schemas/post.schema").PostDocument>>;
    remove(id: string): Promise<postTable & Document & import("mongoose").Document<any, any, import("./schemas/post.schema").PostDocument>>;
}
