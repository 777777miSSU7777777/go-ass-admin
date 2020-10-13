import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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
import { JWTMiddleware } from '@middleware';

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
export class DataModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JWTMiddleware)
      .exclude('/auth/*')
      .forRoutes('*');
  }
}
