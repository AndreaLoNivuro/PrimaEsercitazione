import { Component, OnInit } from '@angular/core';
import { GameItem } from 'src/app/models/game-item.interface';
import { ActivatedRoute } from '@angular/router';
import { GameListService } from 'src/app/services/game-list.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {

  gameID: number;
  game: GameItem;
  
  constructor(private route: ActivatedRoute, private gameListService: GameListService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.game = this.gameListService.getGameItem(Number(params.get("id")));
    })
  }

  trovaGioco() {
    this.game = this.gameListService.getGameItem(this.gameID);
  }

}
