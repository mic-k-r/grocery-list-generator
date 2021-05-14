import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { RECIPES } from '../../mock-recipes';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes = RECIPES;

  constructor() {}

  ngOnInit() {
  }

  selectedRecipe?: Recipe;
  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}
