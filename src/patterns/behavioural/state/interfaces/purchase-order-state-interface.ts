import { PurchaseOrderBaseInterface } from './purchase-order-base-interface';

export interface PurchaseOrderStateInterface
  extends PurchaseOrderBaseInterface {
  getName(): string;
}
