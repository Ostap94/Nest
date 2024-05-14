"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsers1715186296910 = void 0;
class CreateUsers1715186296910 {
    constructor() {
        this.name = 'CreateUsers1715186296910';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "bio" character varying NOT NULL DEFAULT '', "image" character varying NOT NULL DEFAULT '', "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.CreateUsers1715186296910 = CreateUsers1715186296910;
//# sourceMappingURL=1715186296910-CreateUsers.js.map