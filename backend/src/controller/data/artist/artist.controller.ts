import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Res } from '@nestjs/common';
import { ArtistService } from '@service';
import { Artist } from '@model';
import { Response } from 'express';

@Controller('/artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get()
  async getArtists(@Res() res: Response) {
    try {
      const artists: Artist[] = await this.artistService.getArtists();
      
      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': artists,
        'error': null,
      });
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Get Artists Error: ${e}`);
    }
  }

  @Post()
  async newArtists(@Body() body: Artist[], @Res() res: Response) {
    try {
      const newArtists = await this.artistService.newArtists(body);

      res.status

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': newArtists,
        'error': null,
      });
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`New Artists Error: ${e}`);
    }
  }

  @Put()
  async updateArtists(@Body() body: Artist[], @Res() res: Response) {
    try {
      const updatedArtists = await this.artistService.updateArtists(body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': updatedArtists,
        'error': null,
      });
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Update Artists Error: ${e}`);
    }
  }

  @Delete()
  async deleteArtist(@Body() body: Artist[], @Res() res: Response) {
    try {
      const deletedRowsCount = await this.artistService.deleteArtists(body);
      
      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': `Rows affected count: ${deletedRowsCount.reduce((acc: number = 0, cur: number) => acc + cur)}`,
        'error': null,
      });
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Delete Artists Error: ${e}`);
    }
  }
}

export default ArtistController;
