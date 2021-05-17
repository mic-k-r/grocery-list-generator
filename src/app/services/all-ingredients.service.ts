import { Injectable } from '@angular/core';
import { Ingredient } from '../interfaces/ingredient';
import { INGREDIENTS } from '../mock-ingredients';
import { Recipe } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class AllIngredientsService {

  constructor() { }

  getIngredients(): Ingredient[] {
    return INGREDIENTS;
  }

  //searches through INGREDIENTS and finds the corresponding ingredient
  findIngredient(ingredientName: string): Ingredient {
    let ingredient: Ingredient = INGREDIENTS.find(i => i.name === ingredientName)
    return ingredient;
  }

  //takes the ingredient object and adds it to an array
  createIngredientsArray(ingredientNames: string[]): Ingredient[] {
    let ingredients: Ingredient[] = [];
      for(let name of ingredientNames) {
        let ingredient: Ingredient = this.findIngredient(name)
        ingredients.push(ingredient);
      }
    return ingredients;  
  }

  //assigns array of ingredients to a recipe
  assignIngredientsToRecipe(ingredientsArray: Ingredient[], recipe: Recipe) {
    let returnedRecipe = Object.assign(recipe, ingredientsArray);
    return returnedRecipe;
  }
}
