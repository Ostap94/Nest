"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUsernameToUsers1715246969642 = void 0;
class AddUsernameToUsers1715246969642 {
    constructor() {
        this.name = 'AddUsernameToUsers1715246969642';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "username" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
    }
}
exports.AddUsernameToUsers1715246969642 = AddUsernameToUsers1715246969642;
//# sourceMappingURL=1715246969642-AddUsernameToUsers.js.map