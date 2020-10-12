import { Injectable } from '@nestjs/common';
import { UserTracks } from "@model";

@Injectable()
export class UserTracksService {
  async getUserTracks(): Promise<UserTracks[]> {
    return await UserTracks.query().select();
  }

  async newUserTracks(userTracks: UserTracks[]): Promise<UserTracks[]> {
    return UserTracks.query().insertAndFetch(userTracks);
  }  
}

export default UserTracksService;