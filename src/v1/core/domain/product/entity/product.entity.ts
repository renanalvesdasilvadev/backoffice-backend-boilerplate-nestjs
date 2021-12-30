import { Entity } from '@/v1/core/common/entity/entity';
import { v4 as uuidv4 } from 'uuid';

export class ProductEntity extends Entity<string> {
  private _name: string;
  private _price: number;

  public set id(value: string) {
    this._id = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public new(): void {
    this._id = uuidv4();
  }
}
