import { Body, Controller, Get, Post } from '@nestjs/common';
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
}

export default UserTracksController;
