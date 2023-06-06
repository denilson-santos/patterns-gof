import { PurchaseOrderBaseInterface } from './purchase-order-base-interface';
import { PurchaseOrderStateInterface } from './purchase-order-state-interface';

export interface PurchaseOrderInterface extends PurchaseOrderBaseInterface {
  getId(): string;
  getState(): PurchaseOrderStateInterface;
  setState(state: PurchaseOrderStateInterface): void;
}
