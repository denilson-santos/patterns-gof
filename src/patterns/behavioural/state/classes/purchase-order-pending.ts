import { PurchaseOrderApproved } from './purchase-order-approved';
import { PurchaseOrderInterface } from '../interfaces/purchase-order-interface';
import { PurchaseOrderRejected } from './purchase-order-rejected';
import { PurchaseOrderStateInterface } from '../interfaces/purchase-order-state-interface';

export class PurchaseOrderPending implements PurchaseOrderStateInterface {
  private name = 'PURCHASE_ORDER_PENDING';

  public constructor(private purchaseOrder: PurchaseOrderInterface) {}

  public getName(): string {
    return this.name;
  }

  public pendingPayment(): void {
    console.log(
      `A ordem de compra #${this.purchaseOrder.getId()} já está pendente.`
    );
  }

  public approvePayment(): void {
    console.log(
      `A ordem de compra #${this.purchaseOrder.getId()} foi aprovada.`
    );

    this.purchaseOrder.setState(new PurchaseOrderApproved(this.purchaseOrder));
    this.purchaseOrder.shipOrder();
  }

  public rejectPayment(): void {
    console.log(
      `A ordem de compra #${this.purchaseOrder.getId()} foi rejeitada.`
    );

    this.purchaseOrder.setState(new PurchaseOrderRejected(this.purchaseOrder));
  }

  public shipOrder(): void {
    console.log(
      `A ordem de compra #${this.purchaseOrder.getId()} não pode ser enviada, pois ainda não foi aprovada.`
    );
  }
}
