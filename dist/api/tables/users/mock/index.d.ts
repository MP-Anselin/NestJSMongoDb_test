/// <reference types="jest" />
import { UpdateUserDto } from "../dto/update-user.dto";
import { Repository } from "typeorm";
export declare type MockType<T> = {
    [P in keyof T]: jest.Mock<{}>;
};
export declare const userUnitTestParams: {
    updateUserDto: UpdateUserDto;
    userId: string;
    logUser: {
        username: string;
        password: string;
    };
    newUser: {
        lastName: string;
        firstName: string;
        username: string;
        email: string;
        password: string;
        roles: string[];
    };
};
export declare const mockedUser: {
    signUp: {
        _id: any;
        firstName: any;
        lastName: any;
        email: any;
        isLog: any;
        username: any;
        roles: any;
        posts: any;
        access_token: any;
        updatedAt: any;
        createdAt: any;
    };
    logIn: {
        _id: any;
        firstName: any;
        lastName: any;
        email: any;
        isLog: any;
        username: any;
        roles: any;
        posts: any;
        access_token: any;
        updatedAt: any;
        createdAt: any;
    };
    findOne: {
        _id: any;
        firstName: any;
        lastName: any;
        email: any;
        isLog: any;
        username: any;
        roles: any;
        posts: any;
        access_token: any;
        updatedAt: any;
        createdAt: any;
    };
    update: {
        updatedAt: any;
        _id: any;
        firstName: any;
        lastName: any;
        email: any;
        isLog: any;
        username: any;
        roles: any;
        posts: any;
        access_token: any;
        createdAt: any;
    };
    remove: {
        _id: any;
        firstName: any;
        lastName: any;
        email: any;
        isLog: any;
        username: any;
        roles: any;
        posts: any;
        access_token: any;
        updatedAt: any;
        createdAt: any;
    };
};
export declare const userRepositoryMockValue: {
    findAll: jest.Mock<any, any>;
    logOut: jest.Mock<any, any>;
    signUp: jest.Mock<{
        _id: any;
        firstName: any;
        lastName: any;
        email: any;
        isLog: any;
        username: any;
        roles: any;
        posts: any;
        access_token: any;
        updatedAt: any;
        createdAt: any;
    }, [newUser: any]>;
    logIn: jest.Mock<{
        _id: any;
        firstName: any;
        lastName: any;
        email: any;
        isLog: any;
        username: any;
        roles: any;
        posts: any;
        access_token: any;
        updatedAt: any;
        createdAt: any;
    }, [logUser: any]>;
    findOne: jest.Mock<{
        _id: any;
        firstName: any;
        lastName: any;
        email: any;
        isLog: any;
        username: any;
        roles: any;
        posts: any;
        access_token: any;
        updatedAt: any;
        createdAt: any;
    }, [userId: any]>;
    update: jest.Mock<{
        updatedAt: any;
        _id: any;
        firstName: any;
        lastName: any;
        email: any;
        isLog: any;
        username: any;
        roles: any;
        posts: any;
        access_token: any;
        createdAt: any;
    }, [userId: any, updateUser: any]>;
    remove: jest.Mock<{
        _id: any;
        firstName: any;
        lastName: any;
        email: any;
        isLog: any;
        username: any;
        roles: any;
        posts: any;
        access_token: any;
        updatedAt: any;
        createdAt: any;
    }, [userId: any]>;
};
export declare const userRepositoryMockFactory: () => MockType<Repository<any>>;
