export interface PurchaseOrderBaseInterface {
  pendingPayment(): void;
  approvePayment(): void;
  rejectPayment(): void;
  shipOrder(): void;
}
