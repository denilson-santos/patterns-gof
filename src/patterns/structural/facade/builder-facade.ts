import { MealBuilder } from '@creational/builder/classes/meal-builder';
import { MealCompositeProtocol } from '@creational/builder/interfaces/meal-composite-protocol';

export class BuilderMealFacade {
  makeMeal(): MealCompositeProtocol {
    return new MealBuilder().makeMeal().makeBeverage().makeDessert().getMeal();
  }

  makeMealWithoutDessert(): MealCompositeProtocol {
    return new MealBuilder().makeMeal().makeBeverage().getMeal();
  }
}
