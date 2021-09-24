import { ILogger } from "../../../core/adapters/v1/logger.interface";
import { IAddressRepository } from "../../../core/repositories/v1/address.repository.interface";
import { UpdateAddressCommand } from "./update-address.command";


export class UpdateCustomerHandler {
    constructor(private repository: IAddressRepository, private logger: ILogger){

    }

    async handle(command: UpdateAddressCommand): Promise<void>{        
        try {            
            await this.repository.update(command.address);
        } catch (e) {
            this.logger.error(UpdateCustomerHandler.name, `Error: ${e}`);
        }                    
    }
}