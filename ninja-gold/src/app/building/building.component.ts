import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  @Input() btype: string;
  @Input() min: number;
  @Input() max: number;
  gcnt: number=0;
  lgoldcount: number =  0;
  constructor(private _dataService: DataService) { }
 
  onClick(){

    this.gcnt= this._dataService.makeNum(this.min, this.max)
    this.lgoldcount = this.lgoldcount + this.gcnt;
    this._dataService.addGold(this.lgoldcount);
    this._dataService.newGold(this.gcnt,this.btype);
           } 
  ngOnInit(){ this._dataService.goldcount.subscribe(
    (goldcount) => {this.lgoldcount = goldcount}
  )}

}

