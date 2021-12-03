import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComicsComponent} from "./comics.component";

const routes: Routes = [
  {path: '', component: ComicsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }
