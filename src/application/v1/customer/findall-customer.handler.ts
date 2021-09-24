import { ILogger } from "../../../core/adapters/v1/logger.interface";
import { Customer } from "../../../core/domains/v1/customer/customer";
import { ICustomerRepository } from "../../../core/repositories/v1/customer.repository.interface";
import { FindAllCustomerCommand } from "./findall-customer.command";

export class FindAllCustomerHandler {
    constructor(private repository: ICustomerRepository, private logger: ILogger){

    }

    async handle(command: FindAllCustomerCommand): Promise<Customer[]>{        
        try {            
            return await this.repository.findAll(command.filters);
        } catch (e) {
            this.logger.error(FindAllCustomerHandler.name, `Error: ${e}`);
        }            
        
    }
}