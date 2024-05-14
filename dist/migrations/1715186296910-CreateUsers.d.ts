import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateUsers1715186296910 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
