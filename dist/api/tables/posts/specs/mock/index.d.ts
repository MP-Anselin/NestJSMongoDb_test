/// <reference types="jest" />
import { Types } from "mongoose";
import { UpdatePostDto } from "../../dto/update-post.dto";
import { Repository } from "typeorm";
export declare type MockType<T> = {
    [P in keyof T]: jest.Mock<{}>;
};
export declare const postUnitTestParams: {
    updatePostDto: UpdatePostDto;
    postId: string;
    newPost: {
        userId: Types.ObjectId;
        title: string;
        description: string;
    };
};
export declare const mockedPost: {
    create: {
        _id: any;
        userId: Types.ObjectId;
        title: string;
        description: string;
        createdAt: any;
        updatedAt: any;
    };
    findOne: {
        _id: string;
        userId: any;
        title: any;
        description: any;
        createdAt: any;
        updatedAt: any;
    };
    update: {
        _id: string;
        userId: string;
        title: string;
        description: string;
        updatedAt: any;
    };
    remove: {
        _id: string;
        userId: any;
        title: any;
        description: any;
        createdAt: any;
        updatedAt: any;
    };
};
export declare const postRepositoryMockValue: {
    findAll: jest.Mock<any, any>;
    create: jest.Mock<{
        _id: any;
        userId: Types.ObjectId;
        title: string;
        description: string;
        createdAt: any;
        updatedAt: any;
    }, [newPost: any]>;
    findOne: jest.Mock<{
        _id: string;
        userId: any;
        title: any;
        description: any;
        createdAt: any;
        updatedAt: any;
    }, [schema: any]>;
    update: jest.Mock<{
        _id: string;
        userId: string;
        title: string;
        description: string;
        updatedAt: any;
    }, [postId: any, updatePost: any]>;
    remove: jest.Mock<{
        _id: string;
        userId: any;
        title: any;
        description: any;
        createdAt: any;
        updatedAt: any;
    }, [postId: any]>;
};
export declare const postRepositoryMockFactory: () => MockType<Repository<any>>;
