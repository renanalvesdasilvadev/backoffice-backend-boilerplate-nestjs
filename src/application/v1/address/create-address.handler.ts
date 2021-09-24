import { ILogger } from "../../../core/adapters/v1/logger.interface";
import { IAddressRepository } from "../../../core/repositories/v1/address.repository.interface";
import { CreateAddressCommand } from "./create-address.command";

export class CreateAddressHandler {
    constructor(private repository: IAddressRepository, private logger: ILogger){

    }

    async handle(command: CreateAddressCommand): Promise<number>{                
        try {            
            command.address.generateId();
            return await this.repository.create(command.address);
        } catch (e) {
            this.logger.error(CreateAddressHandler.name, `Error: ${e}`);
        }  
    }
}