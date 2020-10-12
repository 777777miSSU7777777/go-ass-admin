import { Injectable } from '@nestjs/common';
import { Playlist } from "@model";

@Injectable()
export class PlaylistService {
  async getPlaylists(): Promise<Playlist[]> {
    return await Playlist.query().select();
  }
  
}

export default PlaylistService;