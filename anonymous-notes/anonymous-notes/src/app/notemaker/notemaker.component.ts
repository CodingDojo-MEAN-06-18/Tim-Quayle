import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {NgForm} from '@angular/forms';
//import {Router} from "@angular/router";
@Component({
  selector: 'app-notemaker',
  templateUrl: './notemaker.component.html',
  styleUrls: ['./notemaker.component.css']
})
export class NotemakerComponent implements OnInit {

  constructor(
    private _dataService: DataService
  ) 
    { }

  ngOnInit() {
  }
makeNote(event: Event, Form: NgForm){
  console.log(Form.value);
 this._dataService.makeNote(Form.value);
}
}
