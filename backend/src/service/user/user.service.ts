import { Injectable } from '@nestjs/common';
import { User } from "@model";
import * as uuid from 'uuid';

@Injectable()
export class UserService {
  async getUsers(): Promise<User[]> {
    return await User.query().select();
  }
  
  async newUsers(users: User[]): Promise<User[]> {
    return await User.query().insertAndFetch(users.map((user: User) => {
      return {
        ...user,
        userId: user.userId || uuid.v4(),
      };
    }));
  }
}

export default UserService;