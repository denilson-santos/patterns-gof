import {
  CustomerBudgetInterface,
  CustomerBudgetStatus,
} from '../interfaces/customer-budget-interface';
import { BaseBudgetHandler } from './base-budget-handler';

export class SellerBudgetHandler extends BaseBudgetHandler {
  public handle(budget: CustomerBudgetInterface): CustomerBudgetInterface {
    if (budget.getType() === 'classic' && budget.getValue() <= 10000) {
      budget.setStatus(CustomerBudgetStatus.APPROVED);
      console.log('O vendedor analisou o seu orçamento.');

      return budget;
    }

    return super.handle(budget);
  }
}
