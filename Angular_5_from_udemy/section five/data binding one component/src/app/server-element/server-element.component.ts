import { Component, OnInit, Input, OnChanges, SimpleChanges, Docheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit ,OnChanges, Docheck, AfterContentInit{
@Input() serverElement : {type: string, name: string, content:string}
  constructor() {
  console.log(' constructor called')
  }
  ngOnChanges(changes : SimpleChanges ){
    console.log('OnChanges called');
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInit called');
  }
ngDoCheck(){
  console.log('Do check called');
}
ngAfterContentInit(){
  console.log('AfterContentInit called');

}
}
