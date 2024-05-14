import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateTags1714130251609 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
