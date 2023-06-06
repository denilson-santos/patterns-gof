import { PurchaseOrderInterface } from '../interfaces/purchase-order-interface';
import { PurchaseOrderStateInterface } from '../interfaces/purchase-order-state-interface';

export class PurchaseOrderRejected implements PurchaseOrderStateInterface {
  private name = 'PURCHASE_ORDER_REJECTED';

  public constructor(private purchaseOrder: PurchaseOrderInterface) {}

  public getName(): string {
    return this.name;
  }

  public pendingPayment(): void {
    console.log(
      `A ordem de pagamento #${this.purchaseOrder.getId()} não poder ser pendente, pois já foi rejeitada.`
    );
  }

  public approvePayment(): void {
    console.log(
      `A ordem de pagamento #${this.purchaseOrder.getId()} não pode ser aprovada, pois já foi rejeitada.`
    );
  }

  public rejectPayment(): void {
    console.log(
      `A ordem de pagamento #${this.purchaseOrder.getId()} já está rejeitada.`
    );
  }

  public shipOrder(): void {
    console.log(
      `A ordem de pagamento #${this.purchaseOrder.getId()} não pode ser enviada, pois já foi rejeitada.`
    );
  }
}
