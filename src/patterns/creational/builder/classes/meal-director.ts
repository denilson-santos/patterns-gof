import { MealBuilder } from './meal-builder';
import { MealComposite } from './meal-composite';

export class MealDirector {
  static build(): MealComposite {
    return new MealBuilder().makeMeal().makeBeverage().makeDessert().getMeal();
  }
}
