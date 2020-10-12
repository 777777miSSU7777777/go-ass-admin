import { Controller, Get } from '@nestjs/common';
import { UserTracksService } from '@service';
import { UserTracks } from '@model';

@Controller()
export class UserTracksController {
  constructor(private readonly userTracksService: UserTracksService) {}

  @Get('/user-tracks')
  async getUserTracks(): Promise<UserTracks[]> {
    return await this.userTracksService.getUserTracks();
  }
}

export default UserTracksController;
