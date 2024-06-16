import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { TicketType } from './ticketType';
import { City } from './city';

@Entity()
export class TicketGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  @Index('ticket_group_name_idx', { unique: true })
  name: string;

  @ManyToOne(() => City, (city) => city.ticketGroups, { nullable: true })
  city: City;

  @OneToMany(() => TicketType, (ticketType) => ticketType.ticketGroup, {
    nullable: true,
  })
  ticketTypes: TicketType[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
