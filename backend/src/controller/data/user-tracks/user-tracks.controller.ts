import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserTracksService } from '@service';
import { UserTracks } from '@model';

@Controller()
export class UserTracksController {
  constructor(private readonly userTracksService: UserTracksService) {}

  @Get('/user-tracks')
  async getUserTracks(): Promise<UserTracks[]> {
    return await this.userTracksService.getUserTracks();
  }

  @Post('/user-tracks')
  async newUserTracks(@Body() body: UserTracks[]): Promise<UserTracks[]> {
    return await this.userTracksService.newUserTracks(body);
  }

  @Put('/user-tracks')
  async updateUserTracks(@Body() body: UserTracks[]): Promise<UserTracks[]> {
    return await this.userTracksService.updateUserTracks(body);
  }

  @Delete('/user-tracks')
  async deleteUserTracks(@Body() body: UserTracks[]): Promise<number[]> {
    return await this.userTracksService.deleteArtists(body);
  }
}

export default UserTracksController;
