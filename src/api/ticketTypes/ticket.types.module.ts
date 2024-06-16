import { Module } from '@nestjs/common';
import { TicketTypesService } from './ticket.types.service';
import { TicketTypesController } from './ticket.types.controller';

@Module({
  imports: [],
  controllers: [TicketTypesController],
  providers: [TicketTypesService],
})
export class TicketTypesModule {}
