import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Res } from '@nestjs/common';
import { UserTracksService } from '@service';
import { UserTracks } from '@model';
import { Response } from 'express';

@Controller('/user-tracks')
export class UserTracksController {
  constructor(private readonly userTracksService: UserTracksService) {}

  @Get()
  async getUserTracks(@Res() res: Response) {
    try {
      const userTracks: UserTracks[] = await this.userTracksService.getUserTracks();

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': userTracks,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Get User Tracks Error: ${e}`);
    }
  }

  @Post()
  async newUserTracks(@Body() body: UserTracks[], @Res() res: Response) {
    try {
      const newUserTracks: UserTracks[] = await this.userTracksService.newUserTracks(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': newUserTracks,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`New User Tracks Error: ${e}`);
    }
  }

  @Put()
  async updateUserTracks(@Body() body: UserTracks[], @Res() res: Response) {
    try {
      const updatedUserTracks: UserTracks[] = await this.userTracksService.updateUserTracks(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': updatedUserTracks,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Update User Tracks Error: ${e}`);
    }
  }

  @Delete()
  async deleteUserTracks(@Body() body: UserTracks[], @Res() res: Response) {
    try {
      const deletedRowsCount: number[] = await this.userTracksService.deleteUserTracks(body);

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

      console.error(`Delete User Tracks Error: ${e}`);
    }
  }
}

export default UserTracksController;
