import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Index,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Ticket } from './ticket';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  @Index('city_name_idx', { unique: false })
  name: string;

  @Column('varchar')
  @Index('city_country_code_idx', { unique: false })
  countryCode: string;

  @OneToMany(() => Ticket, (ticket) => ticket.city, { nullable: true })
  tickets: Ticket[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
