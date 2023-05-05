import {
  CustomerBudgetInterface,
  CustomerBudgetStatus,
} from '../interfaces/customer-budget-interface';

export class CustomerBudget implements CustomerBudgetInterface {
  private status: CustomerBudgetStatus = CustomerBudgetStatus.PENDING;

  public constructor(
    private type: 'classic' | 'premium' | 'vip',
    private value: number
  ) {}

  public getType(): 'classic' | 'premium' | 'vip' {
    return this.type;
  }

  public getValue(): number {
    return this.value;
  }

  public getStatus(): CustomerBudgetStatus {
    return this.status;
  }

  public setStatus(status: CustomerBudgetStatus): void {
    this.status = status;
  }
}
