export interface IRepository<T> {
    findAll(filters: any[]): Promise<T[]>;
    findOne(id: string): Promise<T>;
    delete(id: string): Promise<void>;
    create(entity: T): Promise<number>;
    update(entity: T): Promise<number>;
}