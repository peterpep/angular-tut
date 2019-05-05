import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Sesame Chicken','Delicious Chinese Chicken','https://upload.wikimedia.org/wikipedia/commons/6/6b/Sesame_Chicken.gif'),
    new Recipe('Cold Sesame Noodles','Tasty Noodles','https://upload.wikimedia.org/wikipedia/commons/f/f8/Sesamenoodle.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
  

}
