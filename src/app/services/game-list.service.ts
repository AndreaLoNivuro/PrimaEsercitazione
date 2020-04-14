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
    { id: 1, name: 'gioco1', descrizione: 'descrizione1', genere: 1, prezzo: '5.00', annoUscita: new Date(), immagine: '../assets/img/img1.jpg'},
    { id: 2, name: 'gioco2', descrizione: 'descrizione2', genere: 3, prezzo: '6.00', annoUscita: new Date(), immagine: '../assets/img/img1.jpg'},
    { id: 3, name: 'gioco3', descrizione: 'descrizione3', genere: 2, prezzo: '7.00', annoUscita: new Date(), immagine: '../assets/img/img1.jpg'},
    { id: 4, name: 'gioco4', descrizione: 'descrizione4', genere: 3, prezzo: '8.00', annoUscita: new Date(), immagine: '../assets/img/img1.jpg'}
  ];

  private genereList: GenereGame[] = [
    { id: 1, description: 'azione' },
    { id: 2, description: 'avventura' },
    { id: 3, description: 'boh' },
  ];

  constructor() { }

  getGameList(): GameItem[] {
    return this.gameListStored;
  }

  getGenereList(): GenereGame[] {
    return this.genereList;
  }

  getGameItem(id: number): GameItem {
    return this.gameListStored.find(item => {
      return item.id === id;
    });
  }

  getGenereById(idGenere: number): GenereGame {
    return this.genereList.find(item => {
      return item.id === idGenere;
    });
  }
  
}
