import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { PostService } from '../service/post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async addPost(
    @Body('title') postTitle: string,
    @Body('description') postDesc: string,
    @Body('actors') postActors: any,
    @Body('categories') postCat: any,
    @Body('imdbRate') postRate: number,
  ) {
    const generatedId = await this.postService.insertPost(
      postTitle,
      postDesc,
      postActors,
      postCat,
      postRate,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllPosts() {
    const posts = await this.postService.getPost();
    return posts;
  }

  @Get(':id')
  getPost(@Param('id') postId: string) {
    return this.postService.getSinglePost(postId);
  }

  @Patch(':id')
  async updatePost(
    @Param('id') postId: string,
    @Body('title') postTitle: string,
    @Body('description') postDesc: string,
    @Body('actors') postActors: any,
    @Body('categories') postCat: any,
    @Body('imdbRate') postRate: number,
  ) {
    await this.postService.updatePost(
      postId,
      postTitle,
      postDesc,
      postActors,
      postCat,
      postRate,
    );
  }

  @Delete(':id')
  async deletePost(@Param('id') postId: string) {
    await this.postService.deletePost(postId);
    return null;
  }
}
