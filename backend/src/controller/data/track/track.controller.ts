import { Controller, Get } from '@nestjs/common';
import { TrackService } from '@service';
import { Track } from '@model';

@Controller()
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get('/track')
  async getTracks(): Promise<Track[]> {
    return await this.trackService.getTracks();
  }
}

export default TrackController;
