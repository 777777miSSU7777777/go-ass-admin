import { Controller, Get } from '@nestjs/common';
import { ArtistService } from '@service';
import { Artist } from '@model';

@Controller()
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get('/artist')
  async getTracks(): Promise<Artist[]> {
    return await this.artistService.getArtists();
  }
}

export default ArtistController;
