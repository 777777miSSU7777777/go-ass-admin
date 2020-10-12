import { Body, Controller, Get, Post, Put } from '@nestjs/common';
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

  @Put('/playlists')
  async updatePlaylists(@Body() body: Playlist[]): Promise<Playlist[]> {
    return await this.playlistService.updatePlaylists(body);
  }
}

export default PlaylistController;
