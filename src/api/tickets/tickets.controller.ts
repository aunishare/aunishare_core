import { Controller, Get } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { Ticket } from '../../orm/entities/ticket';

@Controller()
export class TicketsController {
  constructor(private readonly appService: TicketsService) {}

  @Get('/tickets')
  getTickets(): Promise<Ticket[]> {
    return this.appService.getTickets();
  }
}
