import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export class MealComposite implements MealCompositeProtocol {
  private readonly children: MealCompositeProtocol[] = [];

  getPrice(): number {
    return this.children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  add(...meals: MealCompositeProtocol[]): void {
    meals.forEach((meal) => {
      this.children.push(meal);
    });
  }
}
