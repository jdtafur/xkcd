import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  @Input() comic: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
