import {ConflictException, Injectable, InternalServerErrorException} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {UsersService} from "../users/users.service";
import {User} from "../users/schemas/user.schema";
import {Book, BookDocument} from "./schemas/book.schema";

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>,
              private usersService: UsersService) {
  }

  async create(newBookInfo: CreateBookDto): Promise<Book> {
    const { name } = newBookInfo;
    const userExist = await this.bookModel.findOne({ name });
    if (userExist) {
      throw new ConflictException("Book already exist with this title");
    }
    const newBook = new this.bookModel(newBookInfo);
    newBook.createdAt = new Date();
    newBook.updatedAt = new Date();
    try {
      await newBook.save();
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("Book already exist");
      } else {
        throw new InternalServerErrorException();
      }
    }

    await this.usersService.addBookToBookList(newBook._id, newBook);
    return newBook;
  }

  async findAll() {
    return this.bookModel.find().populate(User.name);
  }

  async findOne(_id: string) {
    return this.bookModel.findOne({ _id });
  }

  async update(_id: string, updateBookDto: UpdateBookDto) {
    updateBookDto.updatedAt = new Date();
    return this.bookModel.findOneAndUpdate({ _id },
        updateBookDto, { useFindAndModify: false });
  }

  async remove(id: string) {
    return this.bookModel.findByIdAndDelete(id);
  }
}
