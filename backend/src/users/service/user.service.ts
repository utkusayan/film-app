import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
//import { CreateUserDto } from 'src/users/dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async addUser(name: string, email: string, password: string, role: any) {
    const newUser = new this.userModel({ name, email, password, role });
    return newUser.save();
  }

  async getUser(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId).exec();
    return user;
  }

  async getUsers(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users;
  }

  async updateUser(
    userId: string,
    name: string,
    email: string,
    password: string,
    role: any,
  ) {
    const updatedUser = await this.userModel.findById(userId).exec();
    if (name) {
      updatedUser.name = name;
    }
    if (email) {
      updatedUser.email = email;
    }
    if (password) {
      updatedUser.password = password;
    }
    if (role) {
      updatedUser.role = role;
    }
    return updatedUser.save();
  }

  async deleteUser(userId): Promise<any> {
    const deletedUser = await this.userModel.findByIdAndRemove(userId);
    return deletedUser;
  }
}
