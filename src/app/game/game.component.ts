import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Player} from "../../interfaces/player";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @ViewChild('game') game: any;
  @Input player: Player;
  @Output onExitGame = new EventEmitter<boolean>();
  points = 0;
  gameTime = 0;
  interval: any;

  constructor() {
  }

  ngOnInit(): void {
    // this.runGameTimer();
  }

  exit() {
    console.log("exit");
    this.onExitGame.emit(false);
  }

  onLineCleared() {
    console.log("onLineCleared");
    this.points++;
  }

  runGameTimer() {
    this.interval = setInterval(() => {
      this.gameTime++;
    }, 1000);
  }

  actionStart() {
    this.runGameTimer();
    this.game.actionStart();
  }

  actionStop() {
    clearInterval(this.interval);
    this.game.actionStop();
  }
}
