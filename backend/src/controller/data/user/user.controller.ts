import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from '@service';
import { User } from '@model';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/user')
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @Post('/user')
  async newUsers(@Body() body: User[]): Promise<User[]> {
    return await this.userService.newUsers(body);
  }

  @Put('/user')
  async updateUsers(@Body() body: User[]): Promise<User[]> {
    return await this.userService.updateUsers(body);
  }

  @Delete('/user')
  async deleteUsers(@Body() body: User[]): Promise<number[]> {
    return await this.userService.deleteUsers(body);
  }
}

export default UserController;
