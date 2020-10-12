import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Res } from '@nestjs/common';
import { GenreService } from '@service';
import { Genre } from '@model';
import { Response } from 'express';

@Controller('/genres')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get()
  async getGenres(@Res() res: Response) {
    try {
      const genres: Genre[] = await this.genreService.getGenres();

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': genres,
        'error': null,
      });
    } catch(e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Get Genres Error: ${e}`);
    }
  }

  @Post()
  async newGenres(@Body() body: Genre[], @Res() res: Response) {
    try {
      const newGenres: Genre[] = await this.genreService.newGenres(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': newGenres,
        'error': null,
      });
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`New Genres Error: ${e}`);
    }
  } 

  @Put()
  async updateGenres(@Body() body: Genre[], @Res() res: Response) {
    try {
      const updatedGenres: Genre[] = await this.genreService.updateGenres(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': updatedGenres,
        'error': null,
      });
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Update Genres Error: ${e}`);
    }
  }

  @Delete()
  async deleteGenres(@Body() body: Genre[], @Res() res: Response) {
    try {
      const deletedRowsCount: number[] = await this.genreService.deleteGenres(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': `Affected rows count: ${deletedRowsCount.reduce((acc: number = 0, cur: number) => acc + cur)}"`,
        'error': null,
      });
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });
      
      console.error(`Delete Genres Error: ${e}`);
    }
  }
}

export default GenreController;
