import { randomUUID } from 'crypto';

import { PurchaseOrderInterface } from '../interfaces/purchase-order-interface';
import { PurchaseOrderPending } from './purchase-order-pending';
import { PurchaseOrderStateInterface } from '../interfaces/purchase-order-state-interface';

export class PurchaseOrder implements PurchaseOrderInterface {
  private id: string = randomUUID();
  private state: PurchaseOrderStateInterface;

  public constructor() {
    this.state = new PurchaseOrderPending(this);
    console.log(`A ordem de pagamento #${this.getId()} está pendente.`);
  }

  public getId(): string {
    return this.id;
  }

  public getState(): PurchaseOrderStateInterface {
    return this.state;
  }

  public setState(state: PurchaseOrderStateInterface): void {
    this.state = state;
  }

  public pendingPayment(): void {
    this.state.pendingPayment();
  }

  public approvePayment(): void {
    this.state.approvePayment();
  }

  public rejectPayment(): void {
    this.state.rejectPayment();
  }

  public shipOrder(): void {
    this.state.shipOrder();
  }
}
