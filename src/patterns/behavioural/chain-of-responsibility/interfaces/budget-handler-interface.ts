import { CustomerBudgetInterface } from './customer-budget-interface';

export interface BudgetHandlerInterface {
  handle(budget: CustomerBudgetInterface): CustomerBudgetInterface;
  setNextHandler(handler: BudgetHandlerInterface): BudgetHandlerInterface;
}
