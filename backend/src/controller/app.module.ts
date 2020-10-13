import { JWTMiddleware } from '@middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [DataModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JWTMiddleware)
      .exclude('/auth/(.*)')
      .forRoutes('*');
  }
}
