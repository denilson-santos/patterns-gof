export enum CustomerBudgetStatus {
  PENDING = 0,
  APPROVED = 1,
  REJECTED = 2,
}

export interface CustomerBudgetInterface {
  getType(): 'classic' | 'premium' | 'vip';
  getValue(): number;
  getStatus(): CustomerBudgetStatus;
  setStatus(status: CustomerBudgetStatus): void;
}
