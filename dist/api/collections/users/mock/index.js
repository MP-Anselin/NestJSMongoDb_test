"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepositoryMockFactory = exports.userRepositoryMockValue = exports.mockedUser = exports.userUnitTestParams = void 0;
const mongoose_1 = require("mongoose");
const update_user_dto_1 = require("../dto/update-user.dto");
const mockedUserInfo = () => {
    return {
        _id: expect.any(mongoose_1.Types.ObjectId),
        firstName: expect.any(String),
        lastName: expect.any(String),
        email: expect.any(String),
        isLog: expect.any(Boolean),
        username: expect.any(String),
        roles: expect.any([]),
        posts: expect.any([]),
        access_token: expect.any(String),
        updatedAt: expect.any(Date),
        createdAt: expect.any(Date)
    };
};
const mockedUserCreate = (info) => {
    const user = mockedUserInfo();
    user.firstName = info.firstName;
    user.lastName = info.lastName;
    user.email = info.lastName;
    delete user.access_token;
    delete user.updatedAt;
    delete user.createdAt;
    return user;
};
const mockedUserFindOne = (userId) => {
    const user = mockedUserInfo();
    user._id = userId;
    delete user.access_token;
    delete user.updatedAt;
    delete user.createdAt;
    return user;
};
const mockedUserUpdate = (userId, updateUserDto) => {
    const user = mockedUserCreate(updateUserDto);
    user.firstName = "testv2.0 updadte";
    user.lastName = "testv2.0 updadte";
    return Object.assign(Object.assign({}, user), { updatedAt: expect.any(Date) });
};
const mockedUserLogIn = (info) => {
    const user = mockedUserInfo();
    user.firstName = info.firstName;
    user.lastName = info.lastName;
    delete user.updatedAt;
    delete user.createdAt;
    return user;
};
const mockedUserRemove = (userId) => {
    return mockedUserFindOne(userId);
};
exports.userUnitTestParams = {
    updateUserDto: new update_user_dto_1.UpdateUserDto(),
    userId: "610f7d3ff43715b50c1d00a4",
    logUser: {
        username: "testv2.0",
        password: "12345678"
    },
    newUser: {
        lastName: "testv2",
        firstName: "testv2",
        username: "testv2.client.6",
        email: "testv2.client.6@testv2.com",
        password: "12345678",
        roles: ["Client"]
    }
};
exports.mockedUser = {
    signUp: mockedUserCreate(exports.userUnitTestParams.newUser),
    logIn: mockedUserLogIn(exports.userUnitTestParams.logUser),
    findOne: mockedUserFindOne(exports.userUnitTestParams.userId),
    update: mockedUserUpdate(exports.userUnitTestParams.userId, exports.userUnitTestParams.updateUserDto),
    remove: mockedUserRemove(exports.userUnitTestParams.userId)
};
exports.userRepositoryMockValue = {
    findAll: jest.fn(),
    logOut: jest.fn(),
    signUp: jest.fn((newUser) => mockedUserCreate(newUser)),
    logIn: jest.fn((logUser) => mockedUserLogIn(logUser)),
    findOne: jest.fn((userId) => mockedUserFindOne(userId)),
    update: jest.fn((userId, updateUser) => mockedUserUpdate(userId, updateUser)),
    remove: jest.fn((userId) => mockedUserRemove(userId))
};
exports.userRepositoryMockFactory = jest.fn(() => (exports.userRepositoryMockValue));
//# sourceMappingURL=index.js.map