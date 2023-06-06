import { PurchaseOrderInterface } from '../interfaces/purchase-order-interface';
import { PurchaseOrderStateInterface } from '../interfaces/purchase-order-state-interface';

export class PurchaseOrderApproved implements PurchaseOrderStateInterface {
  private name = 'PURCHASE_ORDER_APPROVED';

  public constructor(private purchaseOrder: PurchaseOrderInterface) {}

  public getName(): string {
    return this.name;
  }

  public pendingPayment(): void {
    console.log(
      `A ordem de pagamento #${this.purchaseOrder.getId()} não poder ser pendente, pois já foi aprovada.`
    );
  }

  public approvePayment(): void {
    console.log(
      `A ordem de pagamento #${this.purchaseOrder.getId()} já está aprovada.`
    );
  }

  public rejectPayment(): void {
    console.log(
      `A ordem de pagamento #${this.purchaseOrder.getId()} não pode ser rejeitada, pois já foi aprovada.`
    );
  }

  public shipOrder(): void {
    console.log(
      `A ordem de pagamento #${this.purchaseOrder.getId()} foi enviada.`
    );
  }
}
