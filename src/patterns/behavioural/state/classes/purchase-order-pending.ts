import { PurchaseOrderInterface } from '../interfaces/purchase-order-interface';
import { PurchaseOrderStateInterface } from '../interfaces/purchase-order-state-interface';

export class PurchaseOrderPending implements PurchaseOrderStateInterface {
  private name = 'PURCHASE_ORDER_PENDING';

  public constructor(private purchaseOrder: PurchaseOrderInterface) {}

  public getName(): string {
    return this.name;
  }

  public pendingPayment(): void {
    console.log(
      `A ordem de pagamento #${this.purchaseOrder.getId()} já está pendente.`
    );
  }

  public approvePayment(): void {
    console.log(
      `A ordem de pagamento #${this.purchaseOrder.getId()} foi aprovada.`
    );
  }

  public rejectPayment(): void {
    console.log(
      `A ordem de pagamento #${this.purchaseOrder.getId()} foi rejeitada.`
    );
  }

  public shipOrder(): void {
    console.log(
      `A ordem de pagamento #${this.purchaseOrder.getId()} foi enviada.`
    );
  }
}
