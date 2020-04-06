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

  trovatoGame: boolean;
  idRicerca: number;
  //gameList: GameItem[] = [];

  game: GameItem;

  gameID: number;
  gameName: string;
  gameDescrizione: string;
  gameGenere: string;
  gamePrezzo: string;
  gameAnnoUscita: Date;
  gameImmagine: string;


  constructor(private route: ActivatedRoute, private gameListService: GameListService) {
    //this.gameList = this.gameListService.getGameList();
  }

  ngOnInit(): void {
    /*for (let item in this.gameList) {}
      if (item){}*/

    /*this.route.paramMap.subscribe(params => {
      this.game = this.gameListService.getGameItem(Number(params.get("id")));
    })*/
  }

  trovaGioco() {
    this.game = this.gameListService.getGameItem(this.idRicerca);
    //this.gameID = this.game[0];
    //this.gameName = this.game[1];
    this.trovatoGame = true;
  }

}
