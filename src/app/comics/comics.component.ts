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
  comicNumber = 614;

  constructor(private comicsService: ComicsService) { }

  ngOnInit(): void {
    this.getComicRandom();
  }

  getCurrentComic(): void {
    this.comicsService.getCurrentComic().subscribe(data => {
      this.comic = data;
    });
  }

  getComicRandom(): void {
    this.comicNumber = Math.floor(Math.random()*615)+1;

    // @ts-ignore
    this.comicsService.getComicByNumber(this.comicNumber).subscribe(data => {
      this.comic = data;
    });
  }

  onChangeSelected(itemSelected: QualifyStatus): void {
    this.qualify = itemSelected;
  }
}
