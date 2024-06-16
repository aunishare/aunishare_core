import { TicketGroup } from '../../orm/entities/ticketGroup';
import { TicketType } from '../../orm/entities/ticketType';

export class TicketTypeDTO {
  id: number;
  service: string;
  zone: string;
  time: string;
  description: string;
  price: string;

  static map(ticketType: TicketType): TicketTypeDTO {
    return {
      id: ticketType.id,
      service: ticketType.service,
      zone: ticketType.zone,
      time: ticketType.time,
      description: ticketType.description,
      price: ticketType.price,
    };
  }
}

export class TicketGroupDTO {
  id: number;
  name: string;
  tickets: TicketTypeDTO[];

  static map(ticketGroup: TicketGroup): TicketGroupDTO {
    return {
      id: ticketGroup.id,
      name: ticketGroup.name,
      tickets: ticketGroup.ticketTypes.flatMap((ticketType) => {
        if (ticketType.tickets) {
          return ticketType.tickets.map((ticket) =>
            TicketTypeDTO.map({
              ...ticketType,
              id: ticket.id,
            }),
          );
        }
        return [TicketTypeDTO.map(ticketType)];
      }),
    };
  }
}
