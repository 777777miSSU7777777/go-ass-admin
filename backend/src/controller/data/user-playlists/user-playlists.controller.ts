import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Res } from '@nestjs/common';
import { UserPlaylistsService } from '@service';
import { UserPlaylists } from '@model';
import { Response } from 'express';

@Controller('/user-playlists')
export class UserPlaylistsController {
  constructor(private readonly userPlaylistsService: UserPlaylistsService) {}

  @Get()
  async getUserPlaylists(@Res() res: Response) {
    try {
      const userPlaylists: UserPlaylists[] = await this.userPlaylistsService.getUserPlaylists();

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': userPlaylists,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Get User Playlists Error: ${e}`);
    }
  }

  @Post()
  async newUserPlaylists(@Body() body: UserPlaylists[], @Res() res: Response) {
    try {
      const newUserPlaylists: UserPlaylists[] = await this.userPlaylistsService.newUserPlaylists(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': newUserPlaylists,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`New User Playlists Error: ${e}`);
    }
  }

  @Put()
  async updateUserPlaylists(@Body() body: UserPlaylists[], @Res() res: Response) {
    try {
      const updatedUserPlaylists: UserPlaylists[] = await this.userPlaylistsService.updateUserPlaylists(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': updatedUserPlaylists,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Update User Playlists Error: ${e}`);
    }
  }

  @Delete()
  async deleteUserPlaylists(@Body() body: UserPlaylists[], @Res() res: Response) {
    try {
      const deletedRowsCount: number[] = await this.userPlaylistsService.deleteUserPlaylists(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': `Affected rows count: ${deletedRowsCount.reduce((acc: number = 0, cur: number) => acc + cur)}`,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Delete User Playlists Error: ${e}`);
    }
  }
}

export default UserPlaylistsController;
