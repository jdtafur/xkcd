import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QualifyDirective} from "./qualify.directive";
import {QualifyItemDirective} from "./qualify-item.directive";

@NgModule({
  declarations: [QualifyDirective, QualifyItemDirective],
  imports: [
    CommonModule
  ],
  exports: [QualifyDirective, QualifyItemDirective]
})
export class ToggleModule { }
