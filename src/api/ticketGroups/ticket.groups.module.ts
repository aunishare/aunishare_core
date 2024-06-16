import { Module } from '@nestjs/common';
import { TicketGroupsController } from './ticket.groups.controller';
import { TicketGroupsService } from './ticket.groups.service';

@Module({
  imports: [],
  controllers: [TicketGroupsController],
  providers: [TicketGroupsService],
})
export class TicketGroupsModule {}
