import { Entity } from '@/v1/core/common/entity/entity';
import { v4 as uuidv4 } from 'uuid';

export class PaymentEntity extends Entity<string> {
  private _name: string;

  public set id(value: string) {
    this._id = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}
