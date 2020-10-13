import { Module } from '@nestjs/common';
import {
  ArtistModule,
  GenreModule,
  GenreTracksModule,
  PlaylistModule,
  PlaylistTracksModule,
  TrackModule,
  UserModule,
  UserPlaylistsModule,
  UserTokensModule,
  UserTracksModule
} from '@controller/data';

@Module({
  imports: [
    ArtistModule,
    GenreModule,
    GenreTracksModule,
    PlaylistModule,
    PlaylistTracksModule,
    TrackModule,
    UserModule,
    UserPlaylistsModule,
    UserTokensModule,
    UserTracksModule
  ],
  controllers: [],
  providers: [],
})
export class DataModule {}
