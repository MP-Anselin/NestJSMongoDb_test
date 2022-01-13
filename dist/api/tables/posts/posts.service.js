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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const post_schema_1 = require("./schemas/post.schema");
const users_service_1 = require("../users/users.service");
const user_schema_1 = require("../users/schemas/user.schema");
let PostsService = class PostsService {
    constructor(postModel, usersService) {
        this.postModel = postModel;
        this.usersService = usersService;
    }
    async create(newPostInfo) {
        const { title, userId } = newPostInfo;
        const userExist = await this.postModel.findOne({ title });
        if (userExist) {
            throw new common_1.ConflictException("Post already exist with this title");
        }
        const newPost = new this.postModel(newPostInfo);
        newPost.createdAt = new Date();
        newPost.updatedAt = new Date();
        try {
            await newPost.save();
        }
        catch (error) {
            if (error.code === "23505") {
                throw new common_1.ConflictException("Post already exist");
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
        await this.usersService.updatePostsArray(userId, newPost);
        return newPost;
    }
    async findAll() {
        return this.postModel.find().populate(user_schema_1.User.name);
    }
    async findOne(_id) {
        return this.postModel.findOne({ _id });
    }
    async update(_id, updatePostDto) {
        updatePostDto.updatedAt = new Date();
        return this.postModel.findOneAndUpdate({ _id }, updatePostDto, { useFindAndModify: false });
    }
    async remove(id) {
        return this.postModel.findByIdAndDelete(id);
    }
};
PostsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(post_schema_1.Post.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        users_service_1.UsersService])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map