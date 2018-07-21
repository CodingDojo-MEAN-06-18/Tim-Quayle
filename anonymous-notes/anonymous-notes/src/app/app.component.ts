import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 newnotes=[];
  title = 'app';
  newNotes(eventData){
 console.log("NEWQUOTETOBEPOSTED ",eventData)
  this.newnotes=eventData;
}




}
