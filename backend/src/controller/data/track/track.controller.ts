import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
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

  @Put('/track')
  async updateTracks(@Body() body: Track[]): Promise<Track[]> {
    return await this.trackService.updateTracks(body);
  }

  @Delete('/track')
  async deleteTracks(@Body() body: Track[]): Promise<number[]> {
    return await this.trackService.deleteTracks(body);
  }
}

export default TrackController;
