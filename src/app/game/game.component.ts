import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']

})
export class GameComponent implements OnInit {
  
  user: any;
  userList: any = [];
  editIndex: number = 0;
  
  constructor() {
    this.user = {};
  }
  
  public add() {
    
    this.userList.push(this.user);
    this.user = {};
    console.log(this.userList);
  }
  
  public save() {
    if (this.editIndex != null) {
      this.userList[this.editIndex].name = this.user.name;
      this.userList[this.editIndex].gender = this.user.gender;
    }
  
  }
  }
