import { Test, TestingModule } from "@nestjs/testing";
import { PostsService } from "../posts.service";
import { Post } from "../schemas/post.schema";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { mockedPost, MockType, postRepositoryMockFactory, postRepositoryMockValue, postUnitTestParams } from "./mock";
import { HttpException, HttpStatus } from "@nestjs/common";

describe("PostsService", () => {
  let postService: PostsService;
  let postRepositoryMock: MockType<Repository<Post>>;


  beforeEach(async () => {
    const postModule: TestingModule = await Test.createTestingModule({
      providers: [PostsService, {
        provide: getRepositoryToken(Post),
        useFactory: postRepositoryMockFactory
      }]
    })
      .overrideProvider(PostsService)
      .useValue(postRepositoryMockValue)
      .compile();

    postService = postModule.get<PostsService>(PostsService);
    postRepositoryMock = postModule.get(getRepositoryToken(Post));
  });

  it("should be defined", () => {
    expect(postService).toBeDefined();
  });

  describe("create a new post", () => {
    it("It should create one post on the database", async () => {
      postRepositoryMock.create.mockReturnValue(mockedPost.create);
      postRepositoryMock.findOne.mockReturnValue(undefined);
      expect(await postService.create(mockedPost.create as Post))
        .toEqual(mockedPost.create);
      expect(postRepositoryMock.create)
        .toHaveBeenCalledWith(mockedPost.create);
    });

    it("should throw error if post exists", async () => {
      postRepositoryMock.findOne.mockReturnValue(postUnitTestParams.newPost);
      try {
        await postService.create(postUnitTestParams.newPost);
      } catch (e) {
        expect(e).toEqual(
          new HttpException(
            "Already exist post with this cpf",
            HttpStatus.CONFLICT
          )
        );
      }
    });
  });


  describe("findAll post", () => {
    it("It should return array of all the post", async () => {
      expect(await postService.findAll())
        .toEqual(expect.arrayContaining([]));
      expect(postRepositoryMock.find).toEqual(expect.arrayContaining([]));
    });
  });

  describe("findOne post", () => {
    it("It should return a post", async () => {
      postRepositoryMock.findOne.mockReturnValue(postUnitTestParams.newPost);
      expect(await postService.findOne(postUnitTestParams.postId))
        .toBe(postUnitTestParams.newPost);
    });
  });

  describe("Update post", () => {
    it("should return a post ", async () => {
      postRepositoryMock.findOne.mockReturnValue(mockedPost.update);
      expect(await postService
        .update(postUnitTestParams.postId, mockedPost.update))
        .toEqual(mockedPost.update);
    });
  });

  describe("remove pst", () => {
    it("should return user ", async () => {
      postRepositoryMock.findOne.mockReturnValue(mockedPost.remove);
      expect(await postService
        .remove(postUnitTestParams.postId))
        .toEqual(mockedPost.remove);
    });
  });
});
