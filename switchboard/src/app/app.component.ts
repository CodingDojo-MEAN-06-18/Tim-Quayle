import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  buttonstate = [0,0,0,0,0,0,0,0,0,0]
    onButtonClick(event) { 
       if(!this.buttonstate[event]){
       this.buttonstate[event]=1;                
                            }
       else{
         this.buttonstate[event]=0;
           }
      
      } 
                          }
                        
