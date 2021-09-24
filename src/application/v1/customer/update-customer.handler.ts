import { ILogger } from "../../../core/adapters/v1/logger.interface";
import { ICustomerRepository } from "../../../core/repositories/v1/customer.repository.interface";
import { UpdateCustomerCommand } from "./update-customer.command";

export class UpdateCustomerHandler {
    constructor(private repository: ICustomerRepository, private logger: ILogger){

    }

    async handle(command: UpdateCustomerCommand): Promise<void>{        
        try {            
            await this.repository.update(command.customer);
        } catch (e) {
            this.logger.error(UpdateCustomerHandler.name, `Error: ${e}`);
        }                    
    }
}