import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class BattleService {
  
  players = {};
      winner = {name: '',
            score: 0,
            pic: ''};
      loser = {name: '',
            score: 0,
            pic: ''};

  constructor(private _http: HttpClient) { }
  githubInfo = function(username){
   return this._http.get(`https://api.github.com/users/${username}`)
  }
  battle(user1, user2){
   console.log(user1);
  this.winner = {... ((user1.score > user2.score) ? user1: user2)}
  this.loser = {... ((user1.score > user2.score) ? user2: user1)}      
  console.log("loser",this.loser.name);  
  console.log("winner",this.winner.name);
          this.players =  {winner: this.winner,loser: this.loser}
                 console.log("PLAYERS",this.players)
}
                
            getPlayers(){
              return this.players;
            }
          
            addScore(user){
              console.log("IN POST DATA SERVICE")
              this._http.post('/addscore', user).subscribe(
                (data) =>{
                  console.log("success!");
                       },
                (err) => { console.log(err);}
              )}
              
              getScores() :any{
                console.log("GETscores!")
                return this._http.get('/getscores');
                             }
          
          }
