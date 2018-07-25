import { Component, OnInit } from '@angular/core';
import { BattleService } from '../battle.service';
@Component({
  selector: 'app-battleresults',
  templateUrl: './battleresults.component.html',
  styleUrls: ['./battleresults.component.css']
})
export class BattleresultsComponent implements OnInit {

  constructor(private _dataService: BattleService) { }
  userpic='';
  players = {};
  ngOnInit() {
    this.players = this._dataService.getPlayers();
    this.userpic = this.players['winner'].pic;
    console.log("RESULTS ",this.players['loser'].name);
    //this._dataService.addScore(this.players['winner']);
    this._dataService.addScore(this.players);
  }
  


}
