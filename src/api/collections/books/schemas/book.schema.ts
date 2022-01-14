import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { IsDate, IsNotEmpty } from "class-validator";

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ type: Types.ObjectId, ref: "User"})
  author: Types.ObjectId;

  @Prop({ require: true, unique: true })
  name: string;

  @Prop({ require: true })
  isbn: string;

  @Prop({ require: true })
  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @Prop({ require: true })
  @IsNotEmpty()
  @IsDate()
  updatedAt: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
