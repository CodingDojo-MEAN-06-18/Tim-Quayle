import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-notelister',
  templateUrl: './notelister.component.html',
  styleUrls: ['./notelister.component.css']
})
export class NotelisterComponent implements OnInit {
notes = {};
  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit() {
  this.notes = this._dataService.getNotes()
  .subscribe(
    (response) => {
     console.log(response);
     //console.log(response.weather[0].description);
    },
    (err) => { console.log(err);}
  ); 
}

}
