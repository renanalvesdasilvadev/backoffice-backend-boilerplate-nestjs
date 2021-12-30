import { Entity } from '@/v1/core/common/entity/entity';
import { v4 as uuidv4 } from 'uuid';

export class OrderPaymentEntity extends Entity<string> {
  private _idOrder: string;
  private _idPayment: string;
  private _value: number;

  public get idOrder(): string {
    return this._idOrder;
  }
  public set idOrder(value: string) {
    this._idOrder = value;
  }
  public get idPayment(): string {
    return this._idPayment;
  }
  public set idPayment(value: string) {
    this._idPayment = value;
  }
  public get value(): number {
    return this._value;
  }
  public set value(value: number) {
    this._value = value;
  }
  public new(): void {
    this._id = uuidv4();
  }
}
