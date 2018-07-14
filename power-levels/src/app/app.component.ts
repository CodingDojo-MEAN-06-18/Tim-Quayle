import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
subpower=0;
  //plevel = '';
 // user = {
//    plevel: ''
 // }; 
power=null;
onSubmit(event: Event, form: NgForm){
  event.preventDefault();
  this.subpower = this.power;
}

}
