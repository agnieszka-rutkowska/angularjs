import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {FormsModule} from '@angular/forms';
import {GameComponent} from './game/game.component';

import {TetrisCoreModule} from 'ngx-tetris';

@NgModule({
  declarations: [AppComponent, GameComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, TetrisCoreModule],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule {
}

