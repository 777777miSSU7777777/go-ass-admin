import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Res } from '@nestjs/common';
import { PlaylistService } from '@service';
import { Playlist } from '@model';
import { Response } from 'express';

@Controller('/playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Get()
  async getPlaylists(@Res() res: Response) {
    try {
      const playlists: Playlist[] = await this.playlistService.getPlaylists();

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': playlists,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Get Playlists Error: ${e}`);
    }
  }

  @Post()
  async newPlaylists(@Body() body: Playlist[], @Res() res: Response) {
    try {
      const newPlaylists: Playlist[] = await this.playlistService.newPlaylists(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': newPlaylists,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`New Playlists Error: ${e}`);
    }
  }

  @Put()
  async updatePlaylists(@Body() body: Playlist[], @Res() res: Response) {
    try {
      const updatedPlaylists: Playlist[] = await this.playlistService.updatePlaylists(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': updatedPlaylists,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Update Playlists Error: ${e}`);
    }
  }

  @Delete()
  async deletePlaylists(@Body() body: Playlist[], @Res() res: Response) {
    try {
      const deletedRowsCount: number[] = await this.playlistService.deletePlaylists(body);

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

      console.error(`Delete Playlists Error: ${e}`);
    }
  }
}

export default PlaylistController;
