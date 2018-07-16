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
  @Output() passUpgold = new EventEmitter();
  gobj = {gcount: 0,
          source: ''};
  gcnt=0;
  constructor(private _dataService: DataService) { }
 
  onClick(){
    this.gcnt= this._dataService.makeNum(this.min, this.max)
    console.log("Clicked!")
    this.gobj = {
      gcount: this.gcnt,
      source: this.btype
                }
console.log("CHILD gold",this.gobj.gcount);
console.log("CHILD gold",this.gobj.source);
                this.passUpgold.emit(this.gobj);
}
  ngOnInit() {
  }

}