import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  gotgold=0;
  source='';
  getGold(eventData){
    console.log("PASSED UP gold: ",eventData.gcount);
    console.log("PASSED UP source: ",eventData.source);
    this.gotgold=eventData.gcount;
    this.source=eventData.source;
  }
}
