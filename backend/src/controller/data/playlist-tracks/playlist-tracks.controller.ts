import { Body, Controller, Get, Post, Put } from '@nestjs/common';
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
    return await this.playlistTracksService.newPlaylistTracks(body);
  }

  @Put('/playlist-tracks')
  async updatePlaylistTracks(@Body() body: PlaylistTracks[]): Promise<PlaylistTracks[]> {
    return await this.playlistTracksService.newPlaylistTracks(body);
  }
}

export default PlaylistTracksController;
