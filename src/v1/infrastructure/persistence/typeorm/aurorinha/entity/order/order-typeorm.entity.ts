import { OrderItemEntity } from '@/v1/core/domain/order-item/entity/order-item.entity';
import { OrderPaymentEntity } from '@/v1/core/domain/order-payment/entity/order-payment.entity';
import { ProductEntity } from '@/v1/core/domain/product/entity/product.entity';
import { PaymentEntity } from '@/v1/core/domain/payment/entity/payment.entity';
import { Entity } from '@/v1/core/common/entity/entity';

export class OrderTypeOrmEntity extends Entity<string> {
  private _items: OrderItemEntity[];
  private _payments: OrderPaymentEntity[];
  private _amount: number;
  private _receivedValue: number;

  constructor() {
    super();
    this._items = [];
    this._payments = [];
    this._amount = 0;
    this._receivedValue = 0;
  }

  public get items(): OrderItemEntity[] {
    return this._items;
  }
  public get payments(): OrderPaymentEntity[] {
    return this._payments;
  }
  public get amount(): number {
    return this._amount;
  }
  public get receivedValue(): number {
    return this._receivedValue;
  }
  public get remainingValue(): number {
    return this.amount - this.receivedValue;
  }
  private incrementAmount(value: number): void {
    this._amount += value;
  }
  private incrementReceived(value: number): void {
    this._receivedValue += value;
  }
  public amountCalculate() {
    this._items.forEach((item) => {
      this.incrementAmount(item.amount);
    });
  }
  public sellItem(product: ProductEntity, qty: number) {
    if (!qty) {
      throw new Error('Qty must be greater than zero!');
    }

    const item = new OrderItemEntity();
    item.generateId();
    item.idOrder = this.id;
    item.idProduct = product.id;
    item.product = product;
    item.qty = qty;
    item.amount = qty * product.price;

    this._items.push(item);

    this.incrementAmount(item.amount);
  }
  public receivePayment(value: number, payment: PaymentEntity) {
    if (this.remainingValue < value) {
      throw new Error('Value received is greater than the rest!');
    }

    const orderPayment = new OrderPaymentEntity();
    orderPayment.generateId();
    orderPayment.idPayment = payment.id;
    orderPayment.idOrder = this.id;
    orderPayment.value = value;

    this._payments.push(orderPayment);
    this.incrementReceived(value);
  }
}
