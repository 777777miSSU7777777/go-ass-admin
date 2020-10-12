import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserTokensService } from '@service';
import { UserTokens } from '@model';

@Controller()
export class UserTokensController {
  constructor(private readonly userTokensService: UserTokensService) {}

  @Get('/user-tokens')
  async getUserTokens(): Promise<UserTokens[]> {
    return await this.userTokensService.getUserTokens();
  }

  @Post('/user-tokens')
  async newUserTokens(@Body() body: UserTokens[]): Promise<UserTokens[]> {
    return await this.userTokensService.newUserTokens(body);
  }
}

export default UserTokensController;
