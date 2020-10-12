import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { ArtistService } from '@service';
import { Artist } from '@model';

@Controller()
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get('/artist')
  async getArtists(): Promise<Artist[]> {
    return await this.artistService.getArtists();
  }

  @Post('/artist')
  async newArtists(@Body() body: Artist[]): Promise<Artist[]> {
    return await this.artistService.newArtists(body);
  }

  @Put('/artist')
  async updateArtists(@Body() body: Artist[]): Promise<Artist[]> {
    return await this.artistService.updateArtists(body);
  }
}

export default ArtistController;
