import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  componentToShow: number = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
