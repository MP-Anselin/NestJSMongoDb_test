/// <reference types="mongoose" />
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from "./schemas/book.schema";
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): Promise<Book>;
    findAll(): Promise<(Book & Document & import("mongoose").Document<any, any, import("./schemas/book.schema").BookDocument>)[]>;
    findOne(id: string): Promise<Book & Document & import("mongoose").Document<any, any, import("./schemas/book.schema").BookDocument>>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<Book & Document & import("mongoose").Document<any, any, import("./schemas/book.schema").BookDocument>>;
    remove(id: string): Promise<Book & Document & import("mongoose").Document<any, any, import("./schemas/book.schema").BookDocument>>;
}
