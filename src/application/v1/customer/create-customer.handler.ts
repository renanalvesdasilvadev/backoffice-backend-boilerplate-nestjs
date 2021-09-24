import { ILogger } from "../../core/adapters/v1/logger.interface";
import { ICustomerRepository } from "../../core/repositories/v1/customer.repository.interface";
import { CreateCustomerCommand } from "./create-customer.command";

export class CreateCustomerHandler {
    constructor(private repository: ICustomerRepository, private logger: ILogger){

    }

    async handle(command: CreateCustomerCommand): Promise<number>{                
        try {            
            command.customer.generateId();
            return await this.repository.create(command.customer);
        } catch (e) {
            this.logger.error(CreateCustomerHandler.name, `Error: ${e}`);
        }  
    }
}