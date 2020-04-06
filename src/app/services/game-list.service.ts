import { Injectable } from '@angular/core';
import { GameItem } from '../models/game-item.interface';
import { NodeWithI18n, isNgTemplate } from '@angular/compiler';
import { stringify } from 'querystring';
import { GenereGame } from '../models/genere-game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  private gameListStored: GameItem[] = [
    { id: 1, name: 'gioco1', descrizione: 'descrizione1', genere: 'genere1', prezzo: '5.00', annoUscita: new Date(), immagine: '../assets/img/img1.jpg'},
    { id: 2, name: 'gioco2', descrizione: 'descrizione2', genere: 'genere2', prezzo: '6.00', annoUscita: new Date(), immagine: '../assets/img/img1.jpg'},
    { id: 3, name: 'gioco3', descrizione: 'descrizione3', genere: 'genere3', prezzo: '7.00', annoUscita: new Date(), immagine: '../assets/img/img1.jpg'},
    { id: 4, name: 'gioco4', descrizione: 'descrizione4', genere: 'genere4', prezzo: '8.00', annoUscita: new Date(), immagine: '../assets/img/img1.jpg'}
  ];

  private genereList: GenereGame[] = [
    { id: 1, description: 'azione' },
    { id: 2, description: 'avventura' },
    { id: 1, description: 'boh' },
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

  /*getGameName(id: number): string {
    if (item.id === id) {
      this.gameListStored.find(item => {
        return item.name;
      });
    }
    let name: string = this.gameListStored.find(item => {
      item.id === id;
      return item.name;
    });
    for (let item in this.gameListStored) {
      if (item[0] == (String(id)) {
        item[1];
      }
        
    }
    
  }*/
  
}
