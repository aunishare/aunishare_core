import { Injectable, NotFoundException } from '@nestjs/common';
import AppDataSource from '../../orm';
import { Ticket } from '../../orm/entities/ticket';
import { CreateTicketDTO } from './tickets.dto';
import { User } from '../../orm/entities/user';
import { TicketType } from '../../orm/entities/ticketType';
import { PaginatedData } from '../common/pagination.dto';
import { TicketTypeDTO } from '../ticketGroups/ticket.groups.dto';

@Injectable()
export class TicketsService {
  async getTickets(address: string): Promise<PaginatedData<Ticket>> {
    const user = await AppDataSource.getRepository(User).findOne({
      where: {
        address,
      },
    });
    if (!user) {
      throw new NotFoundException(`User with address ${address} not found`);
    }

    const [data, total] = await AppDataSource.getRepository(
      Ticket,
    ).findAndCount({
      relations: {
        ticketType: {
          ticketGroup: true,
        },
      },
      where: {
        user: { id: user.id },
      },
    });

    return { data, total };
  }

  async getTicket(id: number): Promise<Ticket> {
    const ticket = await AppDataSource.getRepository(Ticket).findOne({
      where: {
        id,
      },
      relations: {
        ticketType: {
          ticketGroup: true,
        },
      },
    });
    if (!ticket) {
      throw new NotFoundException(`Ticket with id ${id} not found`);
    }
    return ticket;
  }

  async getTicketType(id: number): Promise<TicketTypeDTO> {
    const ticketType = await AppDataSource.getRepository(TicketType).findOne({
      where: {
        id,
      },
      relations: {
        ticketGroup: true,
      },
    });
    if (!ticketType) {
      throw new NotFoundException(`Ticket with id ${id} not found`);
    }
    return TicketTypeDTO.map(ticketType);
  }

  async createTicket(ticket: CreateTicketDTO): Promise<Ticket> {
    const user = await AppDataSource.getRepository(User).findOne({
      where: {
        address: ticket.address,
      },
    });
    if (!user) {
      throw new NotFoundException(
        `User with address ${ticket.address} not found`,
      );
    }
    const ticketType = await AppDataSource.getRepository(TicketType).findOne({
      where: {
        id: ticket.ticketTypeId,
      },
    });
    if (!ticketType) {
      throw new NotFoundException(
        `Ticket type with id ${ticket.ticketTypeId} not found`,
      );
    }
    return AppDataSource.getRepository(Ticket).save({
      user,
      ticketType,
      status: 'pending',
    });
  }

  async validateTicket(id: number): Promise<Ticket> {
    const ticket = await AppDataSource.getRepository(Ticket).findOne({
      where: {
        id,
      },
    });
    if (!ticket) {
      throw new NotFoundException(`Ticket with id ${id} not found`);
    }
    if (ticket.status !== 'pending') {
      throw new NotFoundException(`Ticket with id ${id} is not pending`);
    }
    ticket.status = 'validated';
    ticket.validationCode = `DEV${Math.floor(Math.random() * 10000)}`;
    ticket.validatedAt = new Date();

    setTimeout(() => {
      ticket.status = 'expired';
      ticket.validatedAt = null;
      ticket.validationCode = null;
      AppDataSource.getRepository(Ticket).save(ticket);
    }, 30000);

    return AppDataSource.getRepository(Ticket).save(ticket);
  }
}
