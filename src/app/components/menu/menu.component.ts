import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //currentRoute: string = null;
  isLog: string = sessionStorage.getItem('user');
  isAdmin: string = sessionStorage.getItem('tipoUtente');

  menuList: MenuItem[] = [
    {id: 1, descrizione: 'Home', selezionato: true},
    {id: 2, descrizione: 'Lista giochi', selezionato: false},
    {id: 3, descrizione: 'Modifica gioco', selezionato: false},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  logout() {
    sessionStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }

}
