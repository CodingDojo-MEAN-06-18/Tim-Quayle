import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';
@Component({
  selector: 'app-player-list-component',
  templateUrl: './player-list-component.component.html',
  styleUrls: ['./player-list-component.component.css']
})
export class PlayerListComponentComponent implements OnInit {

  constructor(private _teamService: TeamService) { }
  players = [];
  ngOnInit() {
  this._teamService.getPlayers()
  .subscribe(response =>{
    this.players=response;
    console.log("THIS IS RESPONSE",response);
});

  }
  delPlayer(player){
    if(confirm("Are you sure to delete "+player.name))
   {
    console.log("HIT Delete!:", player)
    this._teamService.removePlayer(player);
    this._teamService.getPlayers()
    .subscribe(response =>{
      this.players=response;
      console.log("THIS IS RESPONSE",response);
    });  
  }
  }
}
