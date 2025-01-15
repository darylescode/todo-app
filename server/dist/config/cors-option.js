"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const corsOptions = {
    origin: [`${process.env.URL}`],
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
};
exports.default = corsOptions;
//# sourceMappingURL=cors-option.js.map