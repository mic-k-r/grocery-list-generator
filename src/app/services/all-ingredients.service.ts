import { Injectable } from '@angular/core';
import { Ingredient } from '../interfaces/ingredient';
import { INGREDIENTS } from '../mock-ingredients';

@Injectable({
  providedIn: 'root'
})
export class AllIngredientsService {

  constructor() { }

  getIngredients(): Ingredient[] {
    return INGREDIENTS;
  }

  //need a function that takes in array of strings ingredientNames
  //searches through INGREDIENTS and finds object name properties that match the param
  //takes corresponding Ingredient object and adds it into an array of Ingredients
  //returns Ingredients array
  //assigns this array as ingredients property to recipe

  findIngredient(ingredientName: string): Ingredient {
    let ingredient: Ingredient = INGREDIENTS.find(i => i.name === ingredientName)
    return ingredient;
  }

  createIngredientsArray(ingredientNames: string[]): Ingredient[] {
    let ingredients: Ingredient[] = [];
      for(let name of ingredientNames) {
        let ingredient: Ingredient = this.findIngredient(name)
        ingredients.push(ingredient);
      }
    return ingredients;  
  }
}
