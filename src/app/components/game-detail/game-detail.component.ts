import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from 'src/app/models/game-item.interface';
import { GameListService } from 'src/app/services/game-list.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  //componentToShow: number = 3;

  @Input()
  gameId: number;
  
  game: GameItem;

  constructor(private gameListService: GameListService) { }

  ngOnInit(): void {
    this.game = this.gameListService.getGameItem(this.gameId);
  }

}
