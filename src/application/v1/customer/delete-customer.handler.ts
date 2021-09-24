import { ILogger } from "../../../core/adapters/v1/logger.interface";
import { ICustomerRepository } from "../../../core/repositories/v1/customer.repository.interface";
import { DeleteCustomerCommand } from "./delete-customer.command";

export class DeleteCustomerHandler {
    constructor(private repository: ICustomerRepository, private logger: ILogger){

    }

    async handle(command: DeleteCustomerCommand): Promise<void>{        
        try {            
            await this.repository.delete(command.id);
        } catch (e) {
            this.logger.error(DeleteCustomerHandler.name, `Error: ${e}`);
        }                    
    }
}