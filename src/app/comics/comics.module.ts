import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComicsRoutingModule} from "./comics-routing.module";
import {ComicsComponent} from "./comics.component";
import { ComicComponent } from './components/comic/comic.component';

@NgModule({
  declarations: [ComicsComponent, ComicComponent],
  imports: [
    CommonModule,
    ComicsRoutingModule
  ]
})
export class ComicsModule { }
