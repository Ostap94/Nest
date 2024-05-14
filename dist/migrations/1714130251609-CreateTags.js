"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTags1714130251609 = void 0;
class CreateTags1714130251609 {
    constructor() {
        this.name = 'CreateTags1714130251609';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "tags"`);
    }
}
exports.CreateTags1714130251609 = CreateTags1714130251609;
//# sourceMappingURL=1714130251609-CreateTags.js.map