import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit  {
 
  msgarray= [];
  msgobj = {
    src: '',
    amount: 0
  };
bstring = '';
mpstring = '';
  constructor(private _dataService: DataService) { }
  gobj = {};
  ngOnInit() {
    let foo= this._dataService.eventChanged
    .subscribe(
      (gobj) => {
        this.gobj = gobj;
       console.log("jdjdjjdd",this.gobj);
       this.msgobj = {
        src: gobj.bstring,
        amount: gobj.gcnt
                     }      
        this.msgarray.push(this.msgobj);
                   }
    )
  }

}
