import { Injectable } from '@nestjs/common';
import { UserTokens } from "@model";

@Injectable()
export class UserTokensService {
  async getUserTokens(): Promise<UserTokens[]> {
    return await UserTokens.query().select();
  }
  
}

export default UserTokensService;