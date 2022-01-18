"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_service_1 = require("../users/users.service");
const user_schema_1 = require("../users/schemas/user.schema");
const book_schema_1 = require("./schemas/book.schema");
let BooksService = class BooksService {
    constructor(bookModel, usersService) {
        this.bookModel = bookModel;
        this.usersService = usersService;
    }
    async create(newBookInfo, userId) {
        const { name } = newBookInfo;
        const userExist = await this.bookModel.findOne({ name });
        if (userExist) {
            throw new common_1.ConflictException("Book already exist with this title");
        }
        const newBook = new this.bookModel(newBookInfo);
        newBook.createdAt = new Date();
        newBook.updatedAt = new Date();
        try {
            await newBook.save();
        }
        catch (error) {
            if (error.code === "23505") {
                throw new common_1.ConflictException("Book already exist");
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
        await this.usersService.addBookToBookList(userId, newBook);
        return newBook;
    }
    async findAll() {
        return this.bookModel.find().populate(user_schema_1.User.name);
    }
    async findOne(_id) {
        return this.bookModel.findOne({ _id });
    }
    async update(_id, updateBookDto) {
        updateBookDto.updatedAt = new Date();
        return this.bookModel.findOneAndUpdate({ _id }, updateBookDto, { useFindAndModify: false });
    }
    async remove(id) {
        return this.bookModel.findByIdAndDelete(id);
    }
};
BooksService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(book_schema_1.Book.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_service_1.UsersService])
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map