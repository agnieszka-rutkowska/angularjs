import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examgame';

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