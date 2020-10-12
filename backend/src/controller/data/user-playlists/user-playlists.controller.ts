import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
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

  @Put('/user-playlists')
  async updateUserPlaylists(@Body() body: UserPlaylists[]): Promise<UserPlaylists[]> {
    return await this.userPlaylistsService.updateUserPlaylists(body);
  }

  @Delete('/user-playlists')
  async deleteUserPlaylists(@Body() body: UserPlaylists[]): Promise<number[]> {
    return await this.userPlaylistsService.deleteUserPlaylists(body);
  }
}

export default UserPlaylistsController;
