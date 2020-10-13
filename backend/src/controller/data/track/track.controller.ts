import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Res } from '@nestjs/common';
import { TrackService } from '@service';
import { Track } from '@model';
import { Response } from 'express';

@Controller('/track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  async getTracks(@Res() res: Response) {
    try {
      const tracks: Track[] = await this.trackService.getTracks();

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': tracks,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Get Tracks Error: ${e}`);
    }
  }

  @Post()
  async newTracks(@Body() body: Track[], @Res() res: Response) {
    try {
      const newTracks: Track[] = await this.trackService.newTracks(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': newTracks,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`New Tracks Error: ${e}`);
    }
  }

  @Put()
  async updateTracks(@Body() body: Track[], @Res() res: Response) {
    try {
      const updatedTracks: Track[] = await this.trackService.updateTracks(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': updatedTracks,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Update Tracks Error: ${e}`);
    }
  }

  @Delete()
  async deleteTracks(@Body() body: Track[], @Res() res: Response) {
    try {
      const deletedRowsCount: number[] = await this.trackService.deleteTracks(body);

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

      console.error(`Delete Tracks Error: ${e}`);
    }
  }
}

export default TrackController;
