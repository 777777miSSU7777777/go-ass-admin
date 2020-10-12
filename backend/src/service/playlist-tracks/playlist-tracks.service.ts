import { Injectable } from '@nestjs/common';
import { PlaylistTracks } from "@model";

@Injectable()
export class PlaylistTracksService {
  async getPlaylistTracks(): Promise<PlaylistTracks[]> {
    return await PlaylistTracks.query().select();
  }
  
}

export default PlaylistTracksService;