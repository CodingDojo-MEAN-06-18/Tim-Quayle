
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Quote} from './models/quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newscore=0;
  title = 'app';
index=0;
q: Quote = new Quote();
quotes: Array<Quote> = [];
onSubmit(event: Event,myForm: NgForm){
          event.preventDefault();
          console.log("QUOTE OBJECT: ",this.q);
          this.q.score=0;
          this.quotes.push(this.q);
          console.log("QUOTES: ", this.quotes)
         //new q instance because of reset?
          this.q = new Quote();    
          this.index++;
          this.q.id=this.index;
          console.log("IDX ",this.index)
          myForm.reset();
        }
        scoreData(eventData){
          console.log("OSCORE: ",eventData.score);
          console.log("Oid: ",eventData.id);
          
          if(eventData.delflag===1){
                          console.log("DELEtING")
            delete this.quotes[eventData.id];
                      
                        }
          else{
            const foo = this.quotes[eventData.id];
            foo.score=eventData.score;
           
          }
        }
    
      }
