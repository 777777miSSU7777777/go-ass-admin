import { Injectable } from '@nestjs/common';
import { UserPlaylists } from "@model";

@Injectable()
export class UserPlaylistsService {
  async getUserPlaylists(): Promise<UserPlaylists[]> {
    return await UserPlaylists.query().select();
  }
  
}

export default UserPlaylistsService;