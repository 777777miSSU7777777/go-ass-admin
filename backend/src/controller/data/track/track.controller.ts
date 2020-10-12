import { Body, Controller, Get, Post } from '@nestjs/common';
import { TrackService } from '@service';
import { Track } from '@model';

@Controller()
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get('/track')
  async getTracks(): Promise<Track[]> {
    return await this.trackService.getTracks();
  }

  @Post('/track')
  async newTracks(@Body() body: Track[]): Promise<Track[]> {
    return await this.trackService.newTracks(body);
  }
}

export default TrackController;
