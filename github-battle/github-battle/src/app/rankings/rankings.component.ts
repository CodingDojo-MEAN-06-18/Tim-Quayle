import { Component, OnInit } from '@angular/core';
import {BattleService} from '../battle.service';
@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
  players = [];
  constructor(private _dataService: BattleService) { }

  ngOnInit() {
    this._dataService.getScores()
    .subscribe(response =>{
     this.players=response;
     console.log("THIS IS RESPONSE",response);
     
     this.players.sort(function (a, b) {
      return b.score - a.score;
    });
    



    })
  }
}
