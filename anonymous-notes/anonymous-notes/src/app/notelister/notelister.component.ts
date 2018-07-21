import { Component, OnInit,Input } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-notelister',
  templateUrl: './notelister.component.html',
  styleUrls: ['./notelister.component.css']
})
export class NotelisterComponent implements OnInit {
  @Input() newnotes; 
  notes = [];
  constructor(
    private _dataService: DataService
  ) { }
  ngOnChanges(){
    console.log("Input Changed!")
    this.notes=this.newnotes;
  }
  ngOnInit() {
 console.log("WE ARE HERE!!!!!!!!")
     this._dataService.getNotes()
     .subscribe(response =>{
      this.notes=response.reverse();
      console.log("THIS IS RESPONSE",response);
 });
                         
                           }

}
