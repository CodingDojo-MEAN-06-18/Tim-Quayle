import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
//import { PasswordValidation } from './password-validation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  fsubmit=false;
  user = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    cpassword: '',
    street: '',
    unitnum: '',
    city: '',
    state: '',
    lucky: ''
  }; 
  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    this.fsubmit=true; 
    //form.reset();
  }
}
