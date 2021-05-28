import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe';
import { RECIPES } from '../mock-recipes';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() {}

  getRecipes(): Observable<Recipe[]> {
    const recipes = of(RECIPES);
    return recipes;
  }

  getRecipe(id: number): Observable<Recipe> {
    const recipe = RECIPES.find(r => r.id === id);
    return of(recipe);
  }
}
