import { Injectable } from '@nestjs/common';
import { Track } from "@model";
import * as uuid from 'uuid';

@Injectable()
export class TrackService {
  async getTracks(): Promise<Track[]> {
    return await Track.query().select();
  }

  async newTracks(tracks: Track[]): Promise<Track[]> {
    return await Track.query().insertAndFetch(tracks.map((track: Track) => {
      return {
        ...track,
        trackId: track.trackId || uuid.v4(),
      };
    }));
  }  
}

export default TrackService;