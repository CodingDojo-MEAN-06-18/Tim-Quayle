import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import {DataService} from '../data.service';
import {NgForm} from '@angular/forms';
//import {Router} from "@angular/router";
@Component({
  selector: 'app-notemaker',
  templateUrl: './notemaker.component.html',
  styleUrls: ['./notemaker.component.css']
})
export class NotemakerComponent implements OnInit {
notes = [];
@Output() passUpnotes = new EventEmitter(); 
constructor(
    private _dataService: DataService
  ) 
    { }

  ngOnInit() {
  }
makeNote(event: Event, Form: NgForm){
  event.preventDefault();
  if(!Form.valid){
    Form.reset();
    
  }
  else{
        this._dataService.makeNote(Form.value);
        //Form.reset();
        this._dataService.getNotes()
        .subscribe(response =>{
         this.notes=response.reverse();;
         this.passUpnotes.emit(this.notes);
        })
      
      
        
       }
                                      }
                                                    }
