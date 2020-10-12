import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Res } from '@nestjs/common';
import { GenreTracksService } from '@service';
import { GenreTracks } from '@model';
import { Response } from 'express';

@Controller('/genre-tracks')
export class GenreTracksController {
  constructor(private readonly genreTracksService: GenreTracksService) {}

  @Get()
  async getGenreTracks(@Res() res: Response) {
    try {
      const genreTracks: GenreTracks[] = await this.genreTracksService.getGenreTracks();

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': genreTracks,
        'error': null,
      })
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Get Genre Tracks Error: ${e}`);
    }
  }

  @Post()
  async newGenreTracks(@Body() body: GenreTracks[], @Res() res: Response) {
    try {
      const newGenreTracks: GenreTracks[] = await this.genreTracksService.newGenreTracks(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': newGenreTracks,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`New Genre Tracks Error: ${e}`);
    }
  }

  @Put()
  async updateGenreTracks(@Body() body: GenreTracks[], @Res() res: Response) {
    try {
      const updatedGenreTrackes: GenreTracks[] = await this.genreTracksService.updateGenreTracks(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': updatedGenreTrackes,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Update Genre Tracks Error: ${e}`);
    }
  }

  @Delete()
  async deleteGenreTracks(@Body() body: GenreTracks[], @Res() res: Response) {
    try {
      const deletedRowsCount: number[] = await this.genreTracksService.deleteGenreTracks(body);

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

      console.error(`Delete Genre Tracks Error: ${e}`);
    }
  }
}

export default GenreTracksController;
