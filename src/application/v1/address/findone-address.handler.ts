import { ILogger } from "../../../core/adapters/v1/logger.interface";
import { Address } from "../../../core/domains/v1/customer/address";
import { IAddressRepository } from "../../../core/repositories/v1/address.repository.interface";
import { FindOneAddressCommand } from "./findone-address.command";

export class FindOneAddressHandler {
    constructor(private repository: IAddressRepository, private logger: ILogger){

    }

    async handle(command: FindOneAddressCommand): Promise<Address>{        
        try {            
            return await this.repository.findOne(command.id);
        } catch (e) {
            this.logger.error(FindOneAddressHandler.name, `Error: ${e}`);
        }            
        
    }
}