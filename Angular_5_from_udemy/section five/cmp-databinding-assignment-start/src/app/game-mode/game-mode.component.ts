import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-mode',
  templateUrl: './game-mode.component.html',
  styleUrls: ['./game-mode.component.css']
})
export class GameModeComponent implements OnInit {

constructor() { }
@Output() intervalFired = new EventEmitter<number>();
interval;
lastNumber :number = 0;
  ngOnInit() {
  }
onStartGame(){
  this.interval= setInterval(()=>{this.intervalFired.emit(this.lastNumber+1);
  this.lastNumber++;
},1000);
}
onPauseGame(){
  clearInterval(this.interval);
}

}
