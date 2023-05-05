import {
  CustomerBudgetInterface,
  CustomerBudgetStatus,
} from '../interfaces/customer-budget-interface';
import { BaseBudgetHandler } from './base-budget-handler';

export class DirectorBudgetHandler extends BaseBudgetHandler {
  public handle(budget: CustomerBudgetInterface): CustomerBudgetInterface {
    if (
      budget.getType() === 'premium' &&
      budget.getValue() > 200000 &&
      budget.getValue() <= 1000000
    ) {
      budget.setStatus(CustomerBudgetStatus.APPROVED);
      console.log('O Diretor analisou o seu orçamento.');

      return budget;
    }

    return super.handle(budget);
  }
}
