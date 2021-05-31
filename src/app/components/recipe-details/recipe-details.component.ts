import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RecipesService } from '../../services/recipes.service';
import { ActivatedRoute } from '@angular/router';
import { GroceryListService } from '../../services/grocery-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe | undefined;

  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private groceryListService: GroceryListService
  ) {}

  ngOnInit() {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.recipesService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }

  addToList(recipe: Recipe) {
    this.groceryListService.addToList(recipe);
  }
}
