import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentRoute: string = null;

  title = 'PrimaEsercitazione';

  constructor(private router: Router) { }

  gameIdForDetail: number;
  
  ngOnInit(): void {
    this.router.events.subscribe(value => {
      //console.log('current route: ', this.router.url.toString());
      this.currentRoute=this.router.url.toString();
      });
  }


  
}
