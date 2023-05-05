import {
  CustomerBudgetInterface,
  CustomerBudgetStatus,
} from '../interfaces/customer-budget-interface';
import { BaseBudgetHandler } from './base-budget-handler';

export class CEOBudgetHandler extends BaseBudgetHandler {
  public handle(budget: CustomerBudgetInterface): CustomerBudgetInterface {
    if (budget.getType() === 'vip' && budget.getValue() > 1000000) {
      budget.setStatus(CustomerBudgetStatus.APPROVED);
      console.log('O CEO analisou o seu orçamento.');

      return budget;
    }

    return super.handle(budget);
  }
}
