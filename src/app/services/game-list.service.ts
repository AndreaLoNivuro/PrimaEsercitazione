import { Injectable } from '@angular/core';
import { GameItem } from '../models/game-item.interface';
import { NodeWithI18n } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  private gameListStored: GameItem[] = [
    { id: 1, name: 'gioco1', descrizione: 'descrizione1', genere: 'genere1', prezzo: '5.00', annoUscita: new Date()}
  ];

  constructor() { }

  getGameList(): GameItem[] {
    return this.gameListStored;
  }

  getGameItem(id: number): GameItem {
    return this.gameListStored.find(item => {
      return item.id === id;
    });
  }
  
}
