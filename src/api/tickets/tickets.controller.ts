import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { Ticket } from '../../orm/entities/ticket';
import { CreateTicketDTO } from './tickets.dto';
import { PaginatedData } from '../common/pagination.dto';
import {
  TicketGroupDTO,
  TicketTypeDTO,
} from '../ticketGroups/ticket.groups.dto';
import { Count } from '../common/count.dto';

@Controller()
export class TicketsController {
  constructor(private readonly appService: TicketsService) {}

  @Get('/tickets')
  getTickets(
    @Query('address') address: string,
  ): Promise<PaginatedData<TicketGroupDTO>> {
    return this.appService.getTickets(address);
  }

  @Get('/tickets/types/:id')
  getTicketType(@Param('id') id: number): Promise<TicketTypeDTO> {
    return this.appService.getTicketType(id);
  }

  @Post('/tickets')
  createTicket(@Body() ticket: CreateTicketDTO): Promise<Ticket> {
    return this.appService.createTicket(ticket);
  }

  @Get('/tickets/count')
  getTicketsCount(@Query('address') address: string): Promise<Count> {
    return this.appService.getTicketsCount(address);
  }

  @Get('/tickets/:id')
  getTicket(@Param('id') id: number): Promise<Ticket> {
    return this.appService.getTicket(id);
  }

  @Delete('/tickets/:id')
  @HttpCode(204)
  deleteTicket(@Param('id') id: number): Promise<void> {
    return this.appService.deleteTicket(id);
  }

  @Post('/tickets/:id/validate')
  validateTicket(@Param('id') id: number): Promise<Ticket> {
    return this.appService.validateTicket(id);
  }
}
