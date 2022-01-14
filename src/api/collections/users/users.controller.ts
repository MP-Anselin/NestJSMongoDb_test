import { Controller, Get, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { UsersService } from './users.service';
import { RolesGuard } from './guards/roles.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "../auth/jwt/jwt-auth.guard";

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('')
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('favorite/book/add/:userId&:bookId')
  addFavoriteBook(@Param('userId') userId: string, @Param('bookId') bookId: string) {
    return this.usersService.addBookToFavoriteList(userId, bookId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('favorite/book/delete/:userId&:bookId')
  deleteFavoriteBook(@Param('userId') userId: string, @Param('bookId') bookId: string) {
    return this.usersService.deleteBookToFavoriteList(userId, bookId);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
