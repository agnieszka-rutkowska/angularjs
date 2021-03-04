import {Component} from '@angular/core';
import {Player} from "../interfaces/player";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  player: Player;
  isRegister = false;

  constructor() {
    this.player = {} as Player;
  }

  public start() {
    if (this.isValid()) {
      console.log(this.player);
      this.isRegister = true;
    }
  }

  public isValid() {
    if (this.player.name == null || this.player.name == "") {
      alert("Wprowadz imie!");
      return false;
    }
    if (this.player.email == null || this.player.email == "") {
      alert("Wprowadz email!");
      return false;
    }
    return true;
  }

  public onExitGame(event: boolean) {
    this.isRegister = event;
  }

}
