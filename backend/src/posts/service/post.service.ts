import { HttpException, Injectable, NotFoundException, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostSchema } from '../post.model';
import { Post } from './post.interface';

@Injectable()
export class PostService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async insertPost(
    title: string,
    description: string,
    actors: any,
    categories: any,
    imdbRate: number,
  ) {
    const newPost = new this.postModel({
      title,
      description,
      actors,
      categories,
      imdbRate,
    });
    const result = await newPost.save();
    return result.id as string;
  }

  async getPost() {
    const post = await this.postModel.find().exec();
    return post.map((post) => ({
      id: post.id,
      title: post.title,
      description: post.description,
      actors: post.actors,
      categories: post.categories,
      imdbRate: post.imdbRate,
    }));
  }

  async getSinglePost(postId: string) {
    const post = await this.findPost(postId);
    return {
      id: post.id,
      title: post.title,
      description: post.description,
      actors: post.actors,
      categories: post.categories,
      imdbRate: post.imdbRate,
    };
  }

  async updatePost(
    postId: string,
    title: string,
    description: string,
    actors: any,
    categories: any,
    imdbRate: number,
  ) {
    const updatedPost = await this.findPost(postId);
    if (title) {
      updatedPost.title = title;
    }
    if (description) {
      updatedPost.description = description;
    }
    if (actors) {
      updatedPost.actors = actors;
    }
    if (categories) {
      updatedPost.categories = categories;
    }
    if (imdbRate) {
      updatedPost.imdbRate = imdbRate;
    }
    updatedPost.save();
    return updatedPost;
    return 'Updated!';
  }

  async deletePost(postId: string) {
    const result = await this.postModel.deleteOne({ _id: postId }).exec();
    if (result.n == 0) {
      throw new HttpException('Delete is not done!', 400);
    }
  }

  private async findPost(id: string): Promise<Post> {
    let post;
    try {
      post = await this.postModel.findById(id).exec();
    } catch (error) {
      throw new HttpException('Post not found', 400);
    }
    if (!post) {
      throw new NotFoundException('Could not find post.');
    }
    return post;
  }
  
  /*
  async searchPost(
    title: string,
    description: string,
    actors: any,
    categories: any,
    imdbRate: number,
  ) {
    const searchByTitle = this.postModel({
      title: String;
    });
    await 
    const result = await Post.find();
}
*/