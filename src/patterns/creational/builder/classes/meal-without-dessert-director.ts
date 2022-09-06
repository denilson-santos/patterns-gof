import { MealBuilder } from './meal-builder';
import { MealComposite } from './meal-composite';

export class MealWithoutDessertDirector {
  static build(): MealComposite {
    return new MealBuilder().makeMeal().makeBeverage().getMeal();
  }
}
