import {
  CustomerBudgetInterface,
  CustomerBudgetStatus,
} from '../interfaces/customer-budget-interface';
import { BaseBudgetHandler } from './base-budget-handler';

export class ManagerBudgetHandler extends BaseBudgetHandler {
  public handle(budget: CustomerBudgetInterface): CustomerBudgetInterface {
    if (
      budget.getType() === 'classic' &&
      budget.getValue() > 10000 &&
      budget.getValue() <= 200000
    ) {
      budget.setStatus(CustomerBudgetStatus.APPROVED);
      console.log('O Gerente analisou o seu orçamento.');

      return budget;
    }

    return super.handle(budget);
  }
}
