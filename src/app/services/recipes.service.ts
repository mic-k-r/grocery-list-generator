import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe';
import { RECIPES } from '../mock-recipes';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private router:Router) {}

  getRecipes(): Observable<Recipe[]> {
    const recipes = of(RECIPES);
    return recipes;
  }

  getRecipeId(recipe: Recipe): number {
    return recipe.id;
  }

  findRecipeById(id: number): Recipe {
    let selectedRecipe: Recipe = RECIPES.find(recipe => recipe.id === id);
    return selectedRecipe;
  }

  viewRecipeDetails(recipe: Recipe): void {
    //selects a recipe
    //determines id
    //routes to recipe view with the appropriate id
    let id = recipe.id;
    this.router.navigate(['/recipe-details'])
  }
}
