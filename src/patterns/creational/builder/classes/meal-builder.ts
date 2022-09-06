import { Beans } from './beans';
import { Beverage } from './beverage';
import { Dessert } from './dessert';
import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealComposite } from './meal-composite';
import { Meat } from './meat';
import { Rice } from './rice';

export class MealBuilder implements MealBuilderProtocol {
  private meal: MealComposite = new MealComposite();

  reset(): this {
    this.meal = new MealComposite();

    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    const meat = new Meat('Carne', 15);

    this.meal.add(rice, beans, meat);

    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Beverage', 20);

    this.meal.add(beverage);

    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Dessert', 25);

    this.meal.add(dessert);

    return this;
  }

  getMeal(): MealComposite {
    return this.meal;
  }
}
