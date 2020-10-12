import { Module } from '@nestjs/common';
import { PlaylistTracksController } from './playlist-tracks.controller';
import { PlaylistTracksService } from '@service';

@Module({
  imports: [],
  controllers: [PlaylistTracksController],
  providers: [PlaylistTracksService],
})
export class PlaylistTracksModule {}
