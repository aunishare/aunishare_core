import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddStatus1718484715129 implements MigrationInterface {
  name = 'AddStatus1718484715129';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."ticket_status_enum" AS ENUM('pending', 'validated', 'expired')`,
    );
    await queryRunner.query(
      `ALTER TABLE "ticket" ADD "status" "public"."ticket_status_enum" NOT NULL DEFAULT 'pending'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "ticket" DROP COLUMN "status"`);
    await queryRunner.query(`DROP TYPE "public"."ticket_status_enum"`);
  }
}
