import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
serverElements = [{type:'server', name:'server1', content: 'This is a server1'},
                  { type:'blueprint', name:'blueprint1',content:'This is a blueprint1'}]

constructor() {
}
ngOnInit() {
}
onServerAdded(serverData: {serverName:string, contentName:string}){
  this.serverElements.push({
  type:'server',
  name:serverData.serverName,
  content:serverData.contentName
});
}
onBlueprintAdded(serverData:{serverName:string, contentName:string}){
  this.serverElements.push({
  type:'blueprint',
  name:serverData.serverName,
  content:serverData.contentName
});
}
}
