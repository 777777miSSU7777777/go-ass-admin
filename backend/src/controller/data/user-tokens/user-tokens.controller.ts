import { Controller, Get } from '@nestjs/common';
import { UserTokensService } from '@service';
import { UserTokens } from '@model';

@Controller()
export class UserTokensController {
  constructor(private readonly userTokensService: UserTokensService) {}

  @Get('/user-tokens')
  async getUserTokens(): Promise<UserTokens[]> {
    return await this.userTokensService.getUserTokens();
  }
}

export default UserTokensController;
