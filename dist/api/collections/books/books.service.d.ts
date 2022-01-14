import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Model } from "mongoose";
import { UsersService } from "../users/users.service";
import { Book, BookDocument } from "./schemas/book.schema";
export declare class BooksService {
    private bookModel;
    private usersService;
    constructor(bookModel: Model<BookDocument>, usersService: UsersService);
    create(newBookInfo: CreateBookDto): Promise<Book>;
    findAll(): Promise<(Book & Document & import("mongoose").Document<any, any, BookDocument>)[]>;
    findOne(_id: string): Promise<Book & Document & import("mongoose").Document<any, any, BookDocument>>;
    update(_id: string, updateBookDto: UpdateBookDto): Promise<Book & Document & import("mongoose").Document<any, any, BookDocument>>;
    remove(id: string): Promise<Book & Document & import("mongoose").Document<any, any, BookDocument>>;
}
