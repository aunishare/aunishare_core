import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { Ticket } from '../../orm/entities/ticket';
import { CreateTicketDTO } from './tickets.dto';
import { PaginatedData } from '../common/pagination.dto';

@Controller()
export class TicketsController {
  constructor(private readonly appService: TicketsService) {}

  @Get('/tickets')
  getTickets(
    @Query('address') address: string,
  ): Promise<PaginatedData<Ticket>> {
    return this.appService.getTickets(address);
  }

  @Post('/tickets')
  createTicket(@Body() ticket: CreateTicketDTO): Promise<Ticket> {
    return this.appService.createTicket(ticket);
  }

  @Get('/tickets/:id')
  getTicket(@Param('id') id: number): Promise<Ticket> {
    return this.appService.getTicket(id);
  }

  @Post('/tickets/:id/validate')
  validateTicket(@Param('id') id: number): Promise<Ticket> {
    return this.appService.validateTicket(id);
  }
}
