import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
@Component({
  selector: 'app-player-manage-status-component',
  templateUrl: './player-manage-status-component.component.html',
  styleUrls: ['./player-manage-status-component.component.css']
})
export class PlayerManageStatusComponentComponent implements OnInit {

  constructor(private _teamService: TeamService,
              private _route: ActivatedRoute,
              private _router: Router                                       ) { }
  gamenum: number = 0;
    players=[];
  ngOnInit() {
    this._route.paramMap.subscribe( params => {
     
      //convert the paramater string to a number
      this.gamenum = parseInt(params.get('id'), 10);
      console.log("PASSED ROUTE VALUE:",this.gamenum);
      
    })
    this._teamService.getPlayers()
  .subscribe(response =>{
    this.players=response;
    console.log("THIS IS RESPONSE",response);
});



  }
  changeStatus(player,playFlag: string,game: number){
  console.log("PLAYFLAG IS:",playFlag);
  if(playFlag==='p'){
    player.status[game-1]=1;
                     }
    else if(playFlag==='np')  {
      player.status[game-1]=2;
                              }
  
    else if(playFlag==='u')  {
      player.status[game-1]=0;
                            }
  this._teamService.changeStatus(player);
 //force page refresh
   location.reload();
  }
//I am hijacking the routing, because I need to force a page refresh after the route is made
 changeGame(gamenum)
 {
   this._router.navigate(['/status/game/'+gamenum])
  //force page refresh
  location.reload();
 }
                        }
