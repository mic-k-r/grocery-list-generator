import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {

  groceryList: Recipe[] = [];

  constructor() { }

  addToList(recipe: Recipe): void {
    if(!this.groceryList.includes(recipe)) {
      this.groceryList.push(recipe);
      window.alert('You\'ve added a recipe to your grocery list!');
    } else {
      window.alert('You\'ve already added that recipe.');
    }
  }

  getGroceryList(): Recipe[] {
    return this.groceryList;
  }

  clearList(): Recipe[] {
    this.groceryList = [];
    return this.groceryList;
  }
}
