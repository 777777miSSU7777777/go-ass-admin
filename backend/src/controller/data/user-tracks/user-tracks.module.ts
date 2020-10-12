import { Module } from '@nestjs/common';
import { UserTracksController } from './user-tracks.controller';
import { UserTracksService } from '@service';

@Module({
  imports: [],
  controllers: [UserTracksController],
  providers: [UserTracksService],
})
export class UserTracksModule {}
