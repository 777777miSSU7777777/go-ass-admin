import { Controller, Get } from '@nestjs/common';
import { PlaylistTracksService } from '@service';
import { PlaylistTracks } from '@model';

@Controller()
export class PlaylistTracksController {
  constructor(private readonly playlistTracksService: PlaylistTracksService) {}

  @Get('/playlist-tracks')
  async getPlaylistTracks(): Promise<PlaylistTracks[]> {
    return await this.playlistTracksService.getPlaylistTracks();
  }
}

export default PlaylistTracksController;
