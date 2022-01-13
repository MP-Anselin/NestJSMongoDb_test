import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<import("./dto/return-info-user.dto").ReturnInfoUserDto>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./dto/return-info-user.dto").ReturnInfoUserDto>;
    remove(id: string): Promise<import("./dto/return-info-user.dto").ReturnInfoUserDto>;
}
