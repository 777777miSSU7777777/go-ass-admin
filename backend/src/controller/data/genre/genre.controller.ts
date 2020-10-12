import { Body, Controller, Get, Post } from '@nestjs/common';
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
}

export default GenreController;
