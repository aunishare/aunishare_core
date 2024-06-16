import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import AppDataSource from './orm';
import { TicketGroup } from './orm/entities/ticketGroup';
import { TicketType } from './orm/entities/ticketType';

async function bootstrap() {
  await AppDataSource.initialize();

  const groups = {
    total: 3,
    data: [
      {
        id: 0,
        name: 'Time limit',
        tickets: [
          {
            service: 'ZTM Warszawa',
            zone: 'Zone: 1+2',
            time: '20',
            description: 'minute',
            price: '170',
            id: 0,
          },
          {
            service: 'ZTM Warszawa',
            zone: 'Zone: 1',
            time: '75',
            description: 'minute or single fare transfer',
            price: '220',
            id: 1,
          },
          {
            service: 'ZTM Warszawa',
            zone: 'Zone: 1+2',
            time: '90',
            description: 'minute single fare transfer',
            price: '350',
            id: 2,
          },
        ],
      },
      {
        id: 1,
        name: 'Short term',
        tickets: [
          {
            service: 'ZTM Warszawa',
            zone: 'Zone: 1',
            time: 'One-day',
            description: 'zone 1',
            price: '750',
            id: 3,
          },
          {
            service: 'ZTM Warszawa',
            zone: 'Zone: 1+2',
            time: 'One-day',
            description: 'zone 1+2',
            price: '1300',
            id: 4,
          },
          {
            service: 'ZTM Warszawa',
            zone: 'Zone: 1+2',
            time: 'Weekend',
            price: '1200',
            id: 5,
          },
          {
            service: 'ZTM Warszawa',
            zone: 'Zone: 1',
            time: 'Three-day',
            description: 'zone 1',
            price: '1800',
            id: 6,
          },
          {
            service: 'ZTM Warszawa',
            zone: 'Zone: 1+2',
            time: 'Three-day',
            description: 'zone 1+2',
            price: '2850',
            id: 7,
          },
          {
            service: 'ZTM Warszawa',
            zone: 'Zone: 1+2',
            time: 'Three-day',
            description: 'zone 1+2',
            price: '2850',
            id: 8,
          },
        ],
      },
      {
        id: 2,
        name: 'Group',
        tickets: [
          {
            service: 'ZTM Warszawa',
            zone: 'Zone: 1+2',
            time: 'Weekend',
            description: 'Group',
            price: '4000',
            id: 9,
          },
          {
            service: 'ZTM Warszawa',
            zone: 'Zone: 1',
            time: '75',
            description: 'Group. 75 minutes or 1 journey',
            price: '2200',
            id: 10,
          },
        ],
      },
    ],
  };

  const app = await NestFactory.create(AppModule);
  await app.listen(3080);
}
bootstrap();
