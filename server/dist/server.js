"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_database_1 = require("./database/db.database");
const port = 8080;
app_1.default.get("/", (req, res) => {
    res.send("Hello asd!");
});
app_1.default.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
db_database_1.pool.getConnection((err, connection) => {
    if (err)
        return console.error("error connecting: " + err.stack);
    console.log("Database connection ready!");
});
//# sourceMappingURL=server.js.map