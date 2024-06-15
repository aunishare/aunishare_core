import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { City } from './city';
import { User } from './user';
import { TicketType } from './ticketType';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date', { nullable: true })
  validatedAt: Date;

  @ManyToOne(() => City, (city) => city.tickets, { nullable: true })
  city: City;

  @ManyToOne(() => User, (user) => user.tickets, { nullable: true })
  user: User;

  @ManyToOne(() => TicketType, (ticketType) => ticketType.tickets, {
    nullable: false,
  })
  ticketType: TicketType;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
