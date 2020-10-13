import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Res } from '@nestjs/common';
import { UserTokensService } from '@service';
import { UserTokens } from '@model';
import { Response } from 'express';

@Controller('/user-tokens')
export class UserTokensController {
  constructor(private readonly userTokensService: UserTokensService) {}

  @Get()
  async getUserTokens(@Res() res: Response) {
    try {
      const userTokens: UserTokens[] = await this.userTokensService.getUserTokens();

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': userTokens,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Get User Tokens Error: ${e}`);
    }
  }

  @Post()
  async newUserTokens(@Body() body: UserTokens[], @Res() res: Response) {
    try {
      const newUserTokens: UserTokens[] = await this.userTokensService.getUserTokens();

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': newUserTokens,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`New User Tokens Error: ${e}`);
    }
  }

  @Put()
  async updateUserTokens(@Body() body: UserTokens[], @Res() res: Response) {
    try {
      const updatedUserTokens: UserTokens[] = await this.userTokensService.newUserTokens(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': updatedUserTokens,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Update User Tokens Error: ${e}`);
    }
  }

  @Delete()
  async deleteUserTokens(@Body() body: UserTokens[], @Res() res: Response) {
    try {
      const deletedRowsCount: number[] = await this.userTokensService.deleteUserTokens(body);

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
      
      console.error(`Delete User Tokens Error: ${e}`);
    }
  }
}

export default UserTokensController;
