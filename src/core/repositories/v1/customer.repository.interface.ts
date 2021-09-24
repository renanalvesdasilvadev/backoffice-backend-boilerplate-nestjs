import { Customer } from "../../domains/v1/customer/customer";
import { IRepository } from "./repository.interface";

export interface ICustomerRepository extends IRepository<Customer> {

}