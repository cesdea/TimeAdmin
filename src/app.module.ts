import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TimeSchedulerModule } from './time_scheduler/time_scheduler.module';

@Module({
  imports: [UsersModule, AuthModule, TimeSchedulerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
