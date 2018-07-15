import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
numbers: number[] = [];
  constructor(private _dataService: DataService) { }
  onClick() {
    console.log("click!")
    this.numbers = this._dataService.getaNum();
     console.log(this.numbers);
    }
  ngOnInit() {
  
  }
}
