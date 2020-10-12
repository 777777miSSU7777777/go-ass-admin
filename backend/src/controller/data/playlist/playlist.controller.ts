import { Controller, Get } from '@nestjs/common';
import { PlaylistService } from '@service';
import { Playlist } from '@model';

@Controller()
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Get('/playlist')
  async getPlaylists(): Promise<Playlist[]> {
    return await this.playlistService.getPlaylists();
  }
}

export default PlaylistController;
