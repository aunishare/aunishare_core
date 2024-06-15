import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './api/users/users.module';
import { TicketsModule } from './api/tickets/tickets.module';
import { CitiesModule } from './api/cities/cities.module';

@Module({
  imports: [UsersModule, TicketsModule, CitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
