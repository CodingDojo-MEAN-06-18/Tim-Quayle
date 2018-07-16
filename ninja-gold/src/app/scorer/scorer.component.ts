import { Component, OnInit,OnChanges,Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-scorer',
  templateUrl: './scorer.component.html',
  styleUrls: ['./scorer.component.css']
})

export class ScorerComponent implements OnInit {
  goldcount=0;
  @Input() gotgold: number;
  //goldcount: number = 0;
  constructor(private _dataService: DataService) { }
  ngOnChanges() {
    console.log("SCORER RECEIVED ", this.gotgold)
    this.goldcount=this.goldcount+this.gotgold;
    console.log("Scorer!")
  }
  ngOnInit() {
  console.log("ScorerInit!")
//this.goldcount=this._dataService.goldcount;
  }
}
