import { User } from "src/core/domains/v1/user/user";
import { IRepository } from "./repository.interface";

export interface IUserRepository extends IRepository<User> {

}