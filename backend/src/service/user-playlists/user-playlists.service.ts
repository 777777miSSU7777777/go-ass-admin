import { Injectable } from '@nestjs/common';
import { UserPlaylists } from "@model";

@Injectable()
export class UserPlaylistsService {
  async getUserPlaylists(): Promise<UserPlaylists[]> {
    return await UserPlaylists.query().select();
  }

  async newUserPlaylists(userPlaylists: UserPlaylists[]): Promise<UserPlaylists[]> {
    return await UserPlaylists.query().insertAndFetch(userPlaylists);
  }  
}

export default UserPlaylistsService;