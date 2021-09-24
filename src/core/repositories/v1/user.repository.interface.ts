import { User } from "../../domains/v1/user";
import { IRepository } from "./repository.interface";

export interface IUserRepository extends IRepository<User> {

}