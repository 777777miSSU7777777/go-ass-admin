import { Module } from '@nestjs/common';
import { UserPlaylistsController } from './user-playlists.controller';
import { UserPlaylistsService } from '@service';

@Module({
  imports: [],
  controllers: [UserPlaylistsController],
  providers: [UserPlaylistsService],
})
export class UserPlaylistsModule {}
