import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./api/collections/users/users.module";

import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./api/collections/auth/auth.module";
import { PostsModule } from "./api/collections/posts/posts.module";

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: './config/config.env'}),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true }),
    UsersModule,
    AuthModule,
    PostsModule],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule {
}