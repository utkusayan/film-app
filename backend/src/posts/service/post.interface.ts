import { Document } from 'mongoose';

export interface Post extends Document {
  postId: string;
  title: string;
  description: string;
  actors: any;
  categories: any;
  imdbRate: number;
}
