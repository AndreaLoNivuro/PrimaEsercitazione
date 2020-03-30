import { Injectable } from '@angular/core';
import { GameItem } from '../models/game-item.interface';
import { NodeWithI18n } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  private gameListStored: GameItem[] = [
    { id: 1, name: 'gioco1', descrizione: 'descrizione1', genere: 'genere1', prezzo: '5.00', annoUscita: new Date()},
    { id: 2, name: 'gioco2', descrizione: 'descrizione2', genere: 'genere2', prezzo: '6.00', annoUscita: new Date()},
    { id: 3, name: 'gioco3', descrizione: 'descrizione3', genere: 'genere3', prezzo: '7.00', annoUscita: new Date()},
    { id: 4, name: 'gioco4', descrizione: 'descrizione4', genere: 'genere4', prezzo: '8.00', annoUscita: new Date()}
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
