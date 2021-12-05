import { Component, OnInit } from '@angular/core';
import {ComicsService} from "./comics.service";
import {QualifyStatus} from "./core/types";

const { NONE, LOW, MIDDLE, HIGH, THE_BEST} = QualifyStatus;

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  comic: any = {};
  qualify: QualifyStatus = LOW;
  qualifyStatus = { NONE, LOW, MIDDLE, HIGH, THE_BEST};

  constructor(private comicsService: ComicsService) { }

  ngOnInit(): void {
    this.comicsService.getCurrentComic().subscribe(data => {
      this.comic = data;
    });
  }

  onChangeSelected(itemSelected: string): void {

  }

}
