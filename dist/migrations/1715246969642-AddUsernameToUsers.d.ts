import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUsernameToUsers1715246969642 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
