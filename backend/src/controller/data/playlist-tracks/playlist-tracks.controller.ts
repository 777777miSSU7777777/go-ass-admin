import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Res } from '@nestjs/common';
import { PlaylistTracksService } from '@service';
import { PlaylistTracks } from '@model';
import { Response } from 'express';

@Controller('/playlist-tracks')
export class PlaylistTracksController {
  constructor(private readonly playlistTracksService: PlaylistTracksService) {}

  @Get()
  async getPlaylistTracks(@Res() res: Response) {
    try {
      const playlistTracks: PlaylistTracks[] = await this.playlistTracksService.getPlaylistTracks();

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': playlistTracks,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Get Playlist Tracks Error: ${e}`);
    }
  }

  @Post()
  async newPlaylistTracks(@Body() body: PlaylistTracks[], @Res() res: Response) {
    try {
      const newPlaylistTracks: PlaylistTracks[] = await this.playlistTracksService.newPlaylistTracks(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': newPlaylistTracks,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`New Playlist Tracks Error: ${e}`);
    }
  }

  @Put()
  async updatePlaylistTracks(@Body() body: PlaylistTracks[], @Res() res: Response) {
    try {
      const updatedPlaylistTracks: PlaylistTracks[] = await this.playlistTracksService.updatePlaylistTracks(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': updatedPlaylistTracks,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Update Playlist Tracks Error: ${e}`);
    }
  }

  @Delete()
  async deletePlaylistTracks(@Body() body: PlaylistTracks[], @Res() res: Response) {
    try {
      const deletedRowsCount: number[] = await this.playlistTracksService.deletePlaylistTracks(body);

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

      console.error(`Delete Playlist Tracks Error: ${e}`);
    }
  }
}

export default PlaylistTracksController;
