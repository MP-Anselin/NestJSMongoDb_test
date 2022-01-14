import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
export declare class AuthorsController {
    private readonly authorsService;
    constructor(authorsService: AuthorsService);
    create(createAuthorDto: CreateAuthorDto): Promise<import("../users/schemas/user.schema").User>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<import("../users/dto/return-info-user.dto").ReturnInfoUserDto>;
    update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<import("../users/dto/return-info-user.dto").ReturnInfoUserDto>;
}
