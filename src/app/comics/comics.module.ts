import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComicsRoutingModule} from "./comics-routing.module";
import {ComicsComponent} from "./comics.component";
import { ComicComponent } from './components/comic/comic.component';
import {ToggleModule} from "./directives/qualify.module";

@NgModule({
  declarations: [ComicsComponent, ComicComponent],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    ToggleModule
  ]
})
export class ComicsModule { }
