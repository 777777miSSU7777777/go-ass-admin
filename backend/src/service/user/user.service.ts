import { Injectable } from '@nestjs/common';
import { User } from "@model";

@Injectable()
export class UserService {
  async getUsers(): Promise<User[]> {
    return await User.query().select();
  }
  
}

export default UserService;