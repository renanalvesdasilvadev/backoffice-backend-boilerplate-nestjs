import { ILogger } from "src/core/adapters/v1/logger.interface";

export class Logger implements ILogger{
    log(service: string, message: string) {
        throw new Error("Method not implemented.");
    }
    info(service: string, message: string) {
        throw new Error("Method not implemented.");
    }
    warn(service: string, message: string) {
        throw new Error("Method not implemented.");
    }
    error(service: string, message: string) {
        throw new Error("Method not implemented.");
    }

}