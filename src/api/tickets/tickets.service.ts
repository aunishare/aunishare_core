import { Injectable } from '@nestjs/common';
import AppDataSource from '../../orm';
import { Ticket } from '../../orm/entities/ticket';

@Injectable()
export class TicketsService {
  getTickets(): object {
    return AppDataSource.getRepository(Ticket).find({
      relations: {
        city: true,
        user: true,
        ticketType: true,
      },
    });
  }
}
