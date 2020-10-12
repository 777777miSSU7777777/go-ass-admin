import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
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

  @Put('/user-tokens')
  async updateUserTokens(@Body() body: UserTokens[]): Promise<UserTokens[]> {
    return await this.userTokensService.updateUserTokens(body);
  }

  @Delete('/user-tokens')
  async deleteUserTokens(@Body() body: UserTokens[]): Promise<number[]> {
    return await this.userTokensService.deleteUserTokens(body);
  }
}

export default UserTokensController;
