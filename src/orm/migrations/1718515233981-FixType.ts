import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixType1718515233981 implements MigrationInterface {
  name = 'FixType1718515233981';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "ticket_type" DROP COLUMN "price"`);
    await queryRunner.query(
      `ALTER TABLE "ticket_type" ADD "price" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "ticket_type" DROP COLUMN "price"`);
    await queryRunner.query(
      `ALTER TABLE "ticket_type" ADD "price" integer NOT NULL`,
    );
  }
}
