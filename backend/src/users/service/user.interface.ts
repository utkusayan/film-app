import { Document } from 'mongoose';

export interface User extends Document {
  userId: string;
  name: string;
  email: string;
  password: string;
  role: any;
}
