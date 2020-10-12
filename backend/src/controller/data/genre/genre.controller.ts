import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { GenreService } from '@service';
import { Genre } from '@model';

@Controller()
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get('/genre')
  async getGenres(): Promise<Genre[]> {
    return await this.genreService.getGenres();
  }

  @Post('/genre')
  async newGenres(@Body() body: Genre[]): Promise<Genre[]> {
    return await this.genreService.newGenres(body);
  } 

  @Put('/genre')
  async updateGenres(@Body() body: Genre[]): Promise<Genre[]> {
    return await this.genreService.updateGenres(body);
  }
}

export default GenreController;
