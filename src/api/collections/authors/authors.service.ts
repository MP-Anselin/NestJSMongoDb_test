import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import {UsersService} from "../users/users.service";

@Injectable()
export class AuthorsService {

  constructor(private readonly usersService: UsersService) {
  }

  create(createAuthorDto: CreateAuthorDto) {
    return this.usersService.create(createAuthorDto)
  }

  findAll() {
    return this.usersService.findAll({role: 'Author'})
  }

  findOne(id: string) {
    return this.usersService.findOne({_id: id, role: 'Author'})
  }

  update(id: string, updateAuthorDto: UpdateAuthorDto) {
    return this.usersService.update(id, updateAuthorDto)
  }
}
