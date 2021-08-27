import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
//import { RouterModule } from '@nestjs/core';
//import { CreateUserDto } from '../dto/user.dto';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async addUser(
    @Res() res,
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('role') role: string,
  ) {
    const newUser = await this.userService.addUser(name, email, password, role);
    return res.status(HttpStatus.OK).json({
      message: 'User has been added successfully!',
      user: newUser,
    });
  }

  // all users
  @Get()
  async getAllUsers(@Res() res) {
    const users = await this.userService.getUsers();
    return res.status(HttpStatus.OK).json(users);
  }

  @Get(':userId')
  async getUser(@Res() res, @Param('userId') userId: string) {
    const user = await this.userService.getUser(userId);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return res.status(HttpStatus.OK).json(user);
  }

  @Patch('users/:userId')
  async updateUser(
    @Res() res,
    @Param('userId') userId: string,
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('role') role: any,
  ) {
    const updatedUser = await this.userService.updateUser(
      userId,
      name,
      email,
      password,
      role,
    );
    return res.status(HttpStatus.OK).json(updatedUser);
  }

  @Delete('users/:userId')
  async deleteUser(@Res() res, @Param('userId') userId: string) {
    const deletedUser = await this.userService.deleteUser(userId);
    return res.status(HttpStatus.OK).json(deletedUser);
  }
}
