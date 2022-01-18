/// <reference types="mongoose" />
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<import("./dto/return-info-user.dto").ReturnInfoUserDto>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./dto/return-info-user.dto").ReturnInfoUserDto>;
    addFavoriteBook(userId: string, bookId: string): Promise<import("./schemas/user.schema").User & Document & import("mongoose").Document<any, any, import("./schemas/user.schema").UserDocument>>;
    deleteFavoriteBook(userId: string, bookId: string): Promise<import("./schemas/user.schema").User & Document & import("mongoose").Document<any, any, import("./schemas/user.schema").UserDocument>>;
    remove(id: string): Promise<import("./dto/return-info-user.dto").ReturnInfoUserDto>;
}
