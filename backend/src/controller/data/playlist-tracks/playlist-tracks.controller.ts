import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlaylistTracksService } from '@service';
import { PlaylistTracks } from '@model';

@Controller()
export class PlaylistTracksController {
  constructor(private readonly playlistTracksService: PlaylistTracksService) {}

  @Get('/playlist-tracks')
  async getPlaylistTracks(): Promise<PlaylistTracks[]> {
    return await this.playlistTracksService.getPlaylistTracks();
  }

  @Post('/playlist-tracks')
  async newPlaylistTracks(@Body() body: PlaylistTracks[]): Promise<PlaylistTracks[]> {
    return await this.playlistTracksService.newPlaylistTrack(body);
  }
}

export default PlaylistTracksController;
