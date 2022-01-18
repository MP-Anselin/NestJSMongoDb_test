import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ValidationPipe, Request} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import {JwtAuthGuard} from "../auth/jwt/jwt-auth.guard";
import {Book} from "./schemas/book.schema";

@Controller('book')
export class BooksController {
  constructor(private readonly booksService: BooksService) {
  }

  @UseGuards(JwtAuthGuard)
  @Post("create")
  create(@Body(ValidationPipe) createBookDto: CreateBookDto,  @Request() request): Promise<Book> {
    console.log("BooksController : create: request.user => ", request.user)
    return this.booksService.create(createBookDto, request.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('s')
  findAll() {
    return this.booksService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}
