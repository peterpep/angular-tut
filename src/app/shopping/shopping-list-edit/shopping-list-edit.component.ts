import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() newIngredient = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    this.newIngredient.emit(
      new Ingredient(this.nameInputRef.nativeElement.value, 
        this.amountInputRef.nativeElement.value)
    );
  }

}
