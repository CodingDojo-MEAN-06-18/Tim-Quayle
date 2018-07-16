import { Component, OnInit,Input,OnChanges,SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnChanges  {
  @Input() source: string;
  @Input() gotgold: number;
  
  msgarray= [];
  msgobj = {
    src: '',
    amount: 0
  };

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  this.msgarray = [];
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("WERE HERE")
    console.log("MSG source:",this.source)
   this.msgobj = {
     src: this.source,
     amount: this.gotgold

   }
   this.msgarray.push(this.msgobj);
   console.log("MSGlength:  ",this.msgarray.length)
  }
}
