import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { GenreTracksService } from '@service';
import { GenreTracks } from '@model';

@Controller()
export class GenreTracksController {
  constructor(private readonly genreTracksService: GenreTracksService) {}

  @Get('/genre-tracks')
  async getGenreTracks(): Promise<GenreTracks[]> {
    return await this.genreTracksService.getGenreTracks();
  }

  @Post('/genre-tracks')
  async newGenreTracks(@Body() body: GenreTracks[]): Promise<GenreTracks[]> {
    return await this.genreTracksService.newGenreTracks(body);
  }

  @Put('/genre-tracks')
  async updateGenreTracks(@Body() body: GenreTracks[]): Promise<GenreTracks[]> {
    return await this.genreTracksService.updateGenreTracks(body);
  }

  @Delete('/genre-tracks')
  async deleteGenreTracks(@Body() body: GenreTracks[]): Promise<number[]> {
    return await this.genreTracksService.deleteGenreTracks(body);
  }
}

export default GenreTracksController;
