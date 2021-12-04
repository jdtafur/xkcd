import { Component, OnInit } from '@angular/core';
import {ComicsService} from "./comics.service";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comic: any = {};

  constructor(private comicsService: ComicsService) { }

  ngOnInit(): void {
    this.comicsService.getCurrentComic().subscribe(data => {
      this.comic = data;
    });
  }

}
