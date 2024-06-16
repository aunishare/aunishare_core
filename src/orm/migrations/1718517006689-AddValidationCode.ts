import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddValidationCode1718517006689 implements MigrationInterface {
  name = 'AddValidationCode1718517006689';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "ticket" ADD "validationCode" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "ticket" DROP COLUMN "validationCode"`,
    );
  }
}
