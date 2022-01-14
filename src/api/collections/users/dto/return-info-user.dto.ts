import { User } from "../schemas/user.schema";
import {Book} from "../../books/schemas/book.schema";

export class ReturnInfoUserDto {
  constructor(user: Partial<User>) {
    this._id = user._id;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.isLog = user.isLog;
    this.username = user.username;
    this.roles = user.roles;
    this.books = user.books;
  }
  _id: string;
  roles: string[];
  last_name: string;
  first_name: string;
  email: string;
  username: string;
  isLog: boolean;
  books: Book[];
}