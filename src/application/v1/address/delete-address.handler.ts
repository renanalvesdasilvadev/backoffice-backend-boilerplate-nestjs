import { ILogger } from "../../../core/adapters/v1/logger.interface";
import { IAddressRepository } from "../../../core/repositories/v1/address.repository.interface";
import { DeleteAddressCommand } from "./delete-address.command";

export class DeleteCustomerHandler {
    constructor(private repository: IAddressRepository, private logger: ILogger){

    }

    async handle(command: DeleteAddressCommand): Promise<void>{        
        try {            
            await this.repository.delete(command.id);
        } catch (e) {
            this.logger.error(DeleteCustomerHandler.name, `Error: ${e}`);
        }                    
    }
}