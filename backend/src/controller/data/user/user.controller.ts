import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Res } from '@nestjs/common';
import { UserService } from '@service';
import { User } from '@model';
import { Response } from 'express';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(@Res() res: Response) {
    try {
      const users: User[] = await this.userService.getUsers();

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': users,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Get Users Error: ${e}`);
    }
  }

  @Post()
  async newUsers(@Body() body: User[], @Res() res: Response) {
    try {
      const newUsers: User[] = await this.userService.newUsers(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': newUsers,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`New Users Error: ${e}`);
    }
  }

  @Put()
  async updateUsers(@Body() body: User[], @Res() res: Response) {
    try {
      const updatedUsers: User[] = await this.userService.updateUsers(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': updatedUsers,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Update Users Error: ${e}`);
    }
  }

  @Delete()
  async deleteUsers(@Body() body: User[], @Res() res: Response) {
    try {
      const deletedRowsCount: number[] = await this.userService.deleteUsers(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': `Affected Rows Count: ${deletedRowsCount.reduce((acc: number = 0, cur: number) => acc + cur)}`,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Delete Users Error: ${e}`);
    }
  }
}

export default UserController;
