import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {

  constructor() { }

  recipeList: Recipe[] = [];

  addToList(recipe: Recipe): void {
    if(!this.recipeList.includes(recipe)) {
      this.recipeList.push(recipe);
      window.alert('You\'ve added a recipe to your grocery list!');
    } else {
      window.alert('You\'ve already added that recipe.');
    }
  }

  getRecipeList(): Recipe[] {
    return this.recipeList;
  }

  clearList(): Recipe[] {
    this.recipeList = [];
    return this.recipeList;
  }
  
  generateGroceryList(recipeList: Recipe[]): string[] {
    let allIngredientsArray: string[] = [];
    for (let recipe of recipeList) {
      for (let ingredient of recipe.ingredients) {
        allIngredientsArray.push(ingredient);
      }
    }
    return allIngredientsArray;
  }
}
