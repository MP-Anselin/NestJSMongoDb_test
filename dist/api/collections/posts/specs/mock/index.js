"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRepositoryMockFactory = exports.postRepositoryMockValue = exports.mockedPost = exports.postUnitTestParams = void 0;
const mongoose_1 = require("mongoose");
const update_post_dto_1 = require("../../dto/update-post.dto");
const mockedPostCreate = (info) => {
    return {
        _id: expect.any(mongoose_1.Types.ObjectId),
        userId: info.userId,
        title: info.title,
        description: info.description,
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date)
    };
};
const mockedPostFindOne = (postId) => {
    return {
        _id: postId,
        userId: expect.any(mongoose_1.Types.ObjectId),
        title: expect.any(String),
        description: expect.any(String),
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date)
    };
};
const mockedPostUpdate = (postId, updatePost) => {
    updatePost.title = "test 0 update";
    updatePost.description = "I'm a test 0 try to update";
    updatePost.userId = "610f7d3ff43715b50c1d00a4";
    return {
        _id: postId,
        userId: updatePost.userId,
        title: updatePost.title,
        description: updatePost.description,
        updatedAt: expect.any(Date)
    };
};
const mockedPostRemove = (postId) => {
    return mockedPostFindOne(postId);
};
exports.postUnitTestParams = {
    updatePostDto: new update_post_dto_1.UpdatePostDto(),
    postId: "610fcf1d06117ef9c46140c0",
    newPost: {
        "userId": mongoose_1.Types.ObjectId("610f7d3ff43715b50c1d00a4"),
        "title": "Unit test",
        "description": "I'm an unit test"
    }
};
exports.mockedPost = {
    create: mockedPostCreate(exports.postUnitTestParams.newPost),
    findOne: mockedPostFindOne(exports.postUnitTestParams.postId),
    update: mockedPostUpdate(exports.postUnitTestParams.postId, exports.postUnitTestParams.updatePostDto),
    remove: mockedPostRemove(exports.postUnitTestParams.postId)
};
exports.postRepositoryMockValue = {
    findAll: jest.fn(),
    create: jest.fn((newPost) => mockedPostCreate(newPost)),
    findOne: jest.fn((schema) => mockedPostFindOne(schema)),
    update: jest.fn((postId, updatePost) => mockedPostUpdate(postId, updatePost)),
    remove: jest.fn((postId) => mockedPostRemove(postId))
};
exports.postRepositoryMockFactory = jest.fn(() => (exports.postRepositoryMockValue));
//# sourceMappingURL=index.js.map