import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = [
    {'email':  'Steve@jobs.com', 'important' : true,'subject': 'I am back', 'content': 'I Owe Woz everything' }
    {'email':  'Steve@woz.com',  'important' : true,'subject': 'I never left', 'content': 'Yes He does!' }        
    {'email':  'jon@xerox.com',  'important' : false,'subject': 'hello?', 'content': 'You Both owe me@#!' }
  ]


}
