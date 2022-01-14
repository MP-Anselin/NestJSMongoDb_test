import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import {UsersModule} from "../users/users.module";

@Module({
  imports: [
    UsersModule
  ],
  controllers: [AuthorsController],
  providers: [AuthorsService]
})
export class AuthorsModule {}
