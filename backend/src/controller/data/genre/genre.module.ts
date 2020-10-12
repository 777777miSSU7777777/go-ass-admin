import { Module } from '@nestjs/common';
import { GenreController } from './genre.controller';
import { GenreService } from '@service';

@Module({
  imports: [],
  controllers: [GenreController],
  providers: [GenreService],
})
export class GenreModule {}
