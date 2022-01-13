import { User } from "../schemas/user.schema";
import { Post } from "../../posts/schemas/post.schema";
export declare class ReturnInfoUserDto {
    constructor(user: Partial<User>);
    _id: string;
    roles: string[];
    lastName: string;
    firstName: string;
    email: string;
    username: string;
    isLog: boolean;
    posts: Post[];
}
