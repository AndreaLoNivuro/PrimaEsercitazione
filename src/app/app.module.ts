import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { EsercitazioneRoutingModule } from './app-routing.module';
import { GameListDirective } from './directives/game-list.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    GameDetailComponent,
    EditGameComponent,
    GameListComponent,
    LoginComponent,
    PageNotFoundComponent,
    GameListDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EsercitazioneRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
