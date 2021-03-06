import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameListService } from 'src/app/services/game-list.service';
import { GameItem } from 'src/app/models/game-item.interface';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  @Output('showDetail')
  showDetailEvent: EventEmitter<number> = new EventEmitter();

  gameList: GameItem[] = [];

  constructor( private gameListService: GameListService) {
    this.gameList = this.gameListService.getGameList();
  }

  ngOnInit(): void {
  }

  showDetail(id: number) {
    this.showDetailEvent.emit(id);
  }

}
