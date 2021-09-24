import { ILogger } from "../../../core/adapters/v1/logger.interface";
import { Customer } from "../../../core/domains/v1/customer/customer";
import { ICustomerRepository } from "../../../core/repositories/v1/customer.repository.interface";
import { FindOneCustomerCommand } from "./findone-customer.command";

export class FindOneCustomerHandler {
    constructor(private repository: ICustomerRepository, private logger: ILogger){

    }

    async handle(command: FindOneCustomerCommand): Promise<Customer>{        
        try {            
            return await this.repository.findOne(command.id);
        } catch (e) {
            this.logger.error(FindOneCustomerHandler.name, `Error: ${e}`);
        }            
        
    }
}