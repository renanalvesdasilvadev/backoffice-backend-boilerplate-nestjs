import { Entity } from '@/v1/core/common/entity/entity';
import { ProductEntity } from '@/v1/core/domain/product/entity/product.entity';

export abstract class AbstractOrderItemEntity extends Entity<string> {
  private _idOrder: string;
  private _idProduct: string;
  private _product: ProductEntity;
  private _qty: number;
  private _amount: number;

  public set id(value: string) {
    this._id = value;
  }
  public get idOrder(): string {
    return this._idProduct;
  }
  public set idOrder(value: string) {
    this._idOrder = value;
  }
  public get idProduct(): string {
    return this._idProduct;
  }
  public set idProduct(value: string) {
    this._idProduct = value;
  }
  public get product(): ProductEntity {
    return this._product;
  }
  public set product(value: ProductEntity) {
    this._product = value;
  }
  public get qty(): number {
    return this._qty;
  }
  public set qty(value: number) {
    this._qty = value;
  }
  public get amount(): number {
    return this._amount;
  }
  public set amount(value: number) {
    this._amount = value;
  }
}
