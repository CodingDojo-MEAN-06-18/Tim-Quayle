import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  now = new Date();
  LastButton = null;
  onButtonClick(event) { 
    this.now = new Date();
    //PST, no manipulation
    if(event===5){
    this.LastButton=5;
    }
    //MST add 1
    if(event===6){
      this.now.setHours(this.now.getHours() + 1);
      this.LastButton=6;
    }
    //CST add 2
    if(event===7){
      this.LastButton=7;
      this.now.setHours(this.now.getHours() + 2);
    }
    //EST add 3}
    if(event===8){
      this.LastButton=8;
      this.now.setHours(this.now.getHours() + 3);
    }
    //clear
    if(event===9){
      this.LastButton=9;
      
    }
}
}
