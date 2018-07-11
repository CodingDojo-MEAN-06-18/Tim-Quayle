import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  


  rcolor(): string{
    const r = Math.floor(Math.random()*7);
    //console.log(r)
    let color: string;
    switch(r){
    case 0: color="red"
         break;
    case 1: color="blue"
         break;
    case 2: color="green"
         break;
    case 3: color="yellow"
         break;
    case 4: color="magenta"
         break;
    case 5: color="cyan"
         break;
    case 6: color="orange"
         break;
             }
         return color;
             
                  }
                           }
