export interface ILogger {
    log(service: string, message: string);
    info(service: string, message: string);
    warn(service: string, message: string);
    error(service: string, message: string);
}