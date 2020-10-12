import { Injectable } from '@nestjs/common';
import { PlaylistTracks } from "@model";

@Injectable()
export class PlaylistTracksService {
  async getPlaylistTracks(): Promise<PlaylistTracks[]> {
    return await PlaylistTracks.query().select();
  }

  async newPlaylistTrack(playlistTracks: PlaylistTracks[]): Promise<PlaylistTracks[]> {
    return await PlaylistTracks.query().insertAndFetch(playlistTracks);
  }
  
}

export default PlaylistTracksService;