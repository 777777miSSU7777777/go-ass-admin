import { Controller, Get } from '@nestjs/common';
import { UserService } from '@service';
import { User } from '@model';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/user')
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }
}

export default UserController;
