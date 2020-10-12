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

  async updateUserTracks(userTracks: UserTracks[]): Promise<UserTracks[]> {
    return Promise.all(userTracks.map((userTrack: UserTracks) => {
      return UserTracks.query().updateAndFetchById(userTrack.userId, userTrack);
    }));
  }
}

export default UserTracksService;