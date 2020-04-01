import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GameItem } from 'src/app/models/game-item.interface';
import { GameListService } from 'src/app/services/game-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit, OnChanges {
  
  isAdmin: string = sessionStorage.getItem('tipoUtente');
  
  @Input()
  gameID: number;

  game: GameItem;
  constructor(private route: ActivatedRoute, private gameListService: GameListService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.game = this.gameListService.getGameItem(this.gameID);
  }

  ngOnInit() {
    /*this.route.paramMap.subscribe(params => {
      this.game = this.gameListService.getGameItem(Number(params.get("id")));
    })*/
  }

}
