import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {}

  getRecipes(): void {
    this.recipesService.getRecipes()
    .subscribe(recipes => this.recipes = recipes);
  }

  ngOnInit() {
    this.getRecipes();
  }

  selectedRecipe?: Recipe;
  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}
