import { BudgetHandlerInterface } from '../interfaces/budget-handler-interface';
import { CustomerBudgetInterface } from '../interfaces/customer-budget-interface';

export abstract class BaseBudgetHandler implements BudgetHandlerInterface {
  private nextHandler?: BudgetHandlerInterface;

  public handle(budget: CustomerBudgetInterface): CustomerBudgetInterface {
    if (this.nextHandler) this.nextHandler.handle(budget);

    return budget;
  }

  public setNextHandler(
    handler: BudgetHandlerInterface
  ): BudgetHandlerInterface {
    this.nextHandler = handler;

    return handler;
  }
}
