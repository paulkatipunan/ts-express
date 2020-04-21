"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// app/server.ts
const index_1 = __importDefault(require("./index"));
const dotenv = __importStar(require("dotenv"));
const port = process.env.PORT || 3000;
dotenv.config();
index_1.default.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`'Express server listening on port ${port}!`);
});
//# sourceMappingURL=server.js.map