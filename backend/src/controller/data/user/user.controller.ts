import { Body, Controller, Get, Post } from '@nestjs/common';
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
}

export default UserController;
