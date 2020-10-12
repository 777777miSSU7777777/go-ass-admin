import { Module } from '@nestjs/common';
import { UserTokensController } from './user-tokens.controller';
import { UserTokensService } from '@service';

@Module({
  imports: [],
  controllers: [UserTokensController],
  providers: [UserTokensService],
})
export class UserTokensModule {}
