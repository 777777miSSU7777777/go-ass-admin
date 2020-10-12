import { Injectable } from '@nestjs/common';
import { Track } from "@model";

@Injectable()
export class TrackService {
  async getTracks(): Promise<Track[]> {
    return await Track.query().select();
  }
  
}

export default TrackService;