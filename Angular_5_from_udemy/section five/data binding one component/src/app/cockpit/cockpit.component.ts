import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
//  newServerContent = '';
  @Output() serverCreated= new EventEmitter<{serverName: string, contentName:string}>();
  @Output() blueprintCreated=new EventEmitter<{serverName:string, contentName:string}>();
  @ViewChild('newContentInput') newContentInput : ElementRef;
  constructor() { }
  onAddServer(newInput : HTMLInputElement) {
    this.serverCreated.emit({
      serverName: newInput.value,
      contentName: this.newContentInput.nativeElement.value
    });

  }

  onAddBlueprint(newInput: HTMLInputElement ) {
    this.blueprintCreated.emit({
      serverName:newInput.value,
      contentName: this.newContentInput.nativeElement.value
    });
  }
  ngOnInit() {
  }

}
