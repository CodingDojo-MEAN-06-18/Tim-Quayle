import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-scorer',
  templateUrl: './scorer.component.html',
  styleUrls: ['./scorer.component.css']
})

export class ScorerComponent implements OnInit {
 
  lgoldcount: number  = 0;
 
  constructor(private _dataService: DataService) { }
  
   ngOnInit() {
  this._dataService.goldcount.subscribe(
      (goldcount) => {this.lgoldcount = goldcount}
   
  )}
  
}
