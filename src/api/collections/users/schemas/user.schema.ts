import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty, MinLength, IsDate, Matches } from 'class-validator';
import { Types } from "mongoose";
import {Book} from "../../books/schemas/book.schema";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ require: true, unique: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Prop({ require: true })
  @IsNotEmpty()
  first_name: string;

  @Prop({ require: true })
  @IsNotEmpty()
  last_name: string;

  @Prop({ require: true, unique: true })
  @IsNotEmpty()
  username: string;

  @Prop({ require: true })
  @MinLength(4)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  password: string;

  @Prop({ require: true })
  @IsNotEmpty()
  isLog: boolean;

  _id: string;

  @Prop({ require: true })
  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @Prop({ require: true })
  @IsNotEmpty()
  @IsDate()
  updatedAt: Date;

  @Prop({ require: true })
  @IsNotEmpty()
  role: string;

  @Prop({ require: true })
  @IsNotEmpty()
  salt: string;

  @Prop({type: [Types.ObjectId], ref: "Book"})
  books: Book[];

  @Prop({type: [Types.ObjectId], ref: "Book"})
  favorite_books: Book[];
}

export const UserSchema = SchemaFactory.createForClass(User);
