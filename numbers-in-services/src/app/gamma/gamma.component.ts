import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
  anumbers: number[] = [];
  bnumbers: number[] = [];
  diff: number;
  constructor(private _dataService: DataService) { }
  onClick() {
    
    this.diff = this._dataService.diff();
    
  }
  ngOnInit() {
  }

}
