import { Injectable } from '@nestjs/common';
import { PlaylistTracks } from "@model";

@Injectable()
export class PlaylistTracksService {
  async getPlaylistTracks(): Promise<PlaylistTracks[]> {
    return await PlaylistTracks.query().select();
  }

  async newPlaylistTracks(playlistTracks: PlaylistTracks[]): Promise<PlaylistTracks[]> {
    return await PlaylistTracks.query().insertAndFetch(playlistTracks);
  }
  
  async updatePlaylistTracks(playlistTracks: PlaylistTracks[]): Promise<PlaylistTracks[]> {
    return Promise.all(playlistTracks.map((playlistTrack: PlaylistTracks) => {
      return PlaylistTracks.query().updateAndFetchById(playlistTrack.playlistId, playlistTrack);
    }));
  }
}

export default PlaylistTracksService;