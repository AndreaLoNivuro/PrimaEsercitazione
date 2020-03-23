import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output()
  selectMenuItem: EventEmitter<number> = new EventEmitter<number>();

  menuList: MenuItem[] = [
    {id: 1, descrizione: 'Home', selezionato: true},
    {id: 2, descrizione: 'Lista giochi', selezionato: false},
    {id: 3, descrizione: 'Modifica gioco', selezionato: false},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  myStyles(id: number) {
    //for (let menuItem of this.menuList) {
      if (id === 1) {
        return 'four';
      } else if (id === 2) {
        return 'five';
      } else if (id === 3) {
        return 'six';
      }
    //four: this.menuList[0];
    //five: this.menuList[1];
    //six: this.menuList[2],
    
  }

  selectedComponent(id: number) {
    for (let menuItem of this.menuList) {
      menuItem.selezionato = id === menuItem.id;
    }
    //condizione ? espressione1 : espressione2 
    this.selectMenuItem.emit(id);
  }

}
