import { DataSource } from 'typeorm';
import { City } from './entities/city';
import { Ticket } from './entities/ticket';
import { TicketType } from './entities/ticketType';
import { User } from './entities/user';
import { config } from '../config';
import logger from './util/logger';
import { Init1718477530610 } from './migrations/1718477530610-init';
import { AddStatus1718484715129 } from './migrations/1718484715129-add-status';

const AppDataSource = new DataSource({
  type: 'postgres',
  database: config.db.name,
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  entities: [City, Ticket, TicketType, User],
  migrations: [Init1718477530610, AddStatus1718484715129],
});

if (process.env.WITH_MIGRATION_DATASOURCE === 'true') {
  AppDataSource.initialize()
    .then(() => {
      logger.info('[DataSource][init] Data Source has been initialized!');
    })
    .catch((err) => {
      logger.error(
        '[DataSource][init] Error during Data Source initialization',
        err,
      );
    });
}

export default AppDataSource;
