import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserPlaylistsService } from '@service';
import { UserPlaylists } from '@model';

@Controller()
export class UserPlaylistsController {
  constructor(private readonly userPlaylistsService: UserPlaylistsService) {}

  @Get('/user-playlists')
  async getUserPlaylists(): Promise<UserPlaylists[]> {
    return await this.userPlaylistsService.getUserPlaylists();
  }

  @Post('/user-playlists')
  async newUserPlaylists(@Body() body: UserPlaylists[]): Promise<UserPlaylists[]> {
    return await this.userPlaylistsService.newUserPlaylists(body);
  }
}

export default UserPlaylistsController;
