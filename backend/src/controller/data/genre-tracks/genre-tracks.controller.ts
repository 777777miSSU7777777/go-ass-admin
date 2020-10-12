import { Controller, Get } from '@nestjs/common';
import { GenreTracksService } from '@service';
import { GenreTracks } from '@model';

@Controller()
export class GenreTracksController {
  constructor(private readonly genreTracksService: GenreTracksService) {}

  @Get('/genre-tracks')
  async getGenreTracks(): Promise<GenreTracks[]> {
    return await this.genreTracksService.getGenreTracks();
  }
}

export default GenreTracksController;
