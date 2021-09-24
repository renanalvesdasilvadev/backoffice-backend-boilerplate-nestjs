import { ILogger } from "../../../core/adapters/v1/logger.interface";
import { Address } from "../../../core/domains/v1/customer/address";
import { IAddressRepository } from "../../../core/repositories/v1/address.repository.interface";
import { FindAllAddressCommand } from "./findall-address.command";

export class FindAllCustomerHandler {
    constructor(private repository: IAddressRepository, private logger: ILogger){

    }

    async handle(command: FindAllAddressCommand): Promise<Address[]>{        
        try {            
            return await this.repository.findAll([{customerId: command.customerId}]);
        } catch (e) {
            this.logger.error(FindAllCustomerHandler.name, `Error: ${e}`);
        }            
        
    }
}