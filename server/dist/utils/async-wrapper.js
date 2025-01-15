"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AsyncWrapper {
    constructor() {
        this.asyncErrorHandler = (cb) => {
            return (req, res, next) => Promise.resolve(cb(req, res, next)).catch((error) => {
                if (error) {
                    next(error);
                }
            });
        };
    }
}
exports.default = AsyncWrapper;
//# sourceMappingURL=async-wrapper.js.map