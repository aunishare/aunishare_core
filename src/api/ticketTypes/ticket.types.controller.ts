import { Controller, Get } from '@nestjs/common';
import { TicketTypesService } from './ticket.types.service';
import { TicketType } from '../../orm/entities/ticketType';

@Controller()
export class TicketTypesController {
  constructor(private readonly appService: TicketTypesService) {}

  @Get('/ticket-types')
  getTicketTypes(): Promise<TicketType[]> {
    return this.appService.getTicketTypes();
  }
}
