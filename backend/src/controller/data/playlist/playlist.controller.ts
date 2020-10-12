import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlaylistService } from '@service';
import { Playlist } from '@model';

@Controller()
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Get('/playlist')
  async getPlaylists(): Promise<Playlist[]> {
    return await this.playlistService.getPlaylists();
  }

  @Post('/playlist')
  async newPlaylists(@Body() body: Playlist[]): Promise<Playlist[]> {
    return await this.playlistService.newPlaylists(body);
  }
}

export default PlaylistController;
