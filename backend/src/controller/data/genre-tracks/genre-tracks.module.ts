import { Module } from '@nestjs/common';
import { GenreTracksController } from './genre-tracks.controller';
import { GenreTracksService } from '@service';

@Module({
  imports: [],
  controllers: [GenreTracksController],
  providers: [GenreTracksService],
})
export class GenreTracksModule {}
