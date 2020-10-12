import { Controller, Get } from '@nestjs/common';
import { UserPlaylistsService } from '@service';
import { UserPlaylists } from '@model';

@Controller()
export class UserPlaylistsController {
  constructor(private readonly userPlaylistsService: UserPlaylistsService) {}

  @Get('/user-playlists')
  async getUserPlaylists(): Promise<UserPlaylists[]> {
    return await this.userPlaylistsService.getUserPlaylists();
  }
}

export default UserPlaylistsController;
