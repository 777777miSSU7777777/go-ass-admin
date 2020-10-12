import { Controller, Get } from '@nestjs/common';
import { GenreService } from '@service';
import { Genre } from '@model';

@Controller()
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get('/genre')
  async getGenres(): Promise<Genre[]> {
    return await this.genreService.getGenres();
  }
}

export default GenreController;
