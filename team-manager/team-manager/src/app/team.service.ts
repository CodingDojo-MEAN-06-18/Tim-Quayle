import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private _http: HttpClient) { }
  
  
  addPlayer(player){
    console.log("IN POST DATA SERVICE")
    this._http.post('/players/addplayer/dbadd',player).subscribe(
      (data) =>{
        console.log("success!");
             },
      (err) => { console.log(err);
      }
    )}
  

    changeStatus(player){
      console.log("IN changE status service")
      this._http.post('/players/changestatus',player).subscribe(
        (data) =>{
          console.log("success!");
               },
        (err) => { console.log(err);
        }
      )}


getPlayers() :any{
  console.log("GETNOTES!")
  return this._http.get('/players/list/getplayers');
               }



               removePlayer(player){
                console.log("IN REMOVE PLAYER SERVICE")
                this._http.post('/players/remove',player).subscribe(
                  (data) =>{
                    console.log("success!");
                         },
                  (err) => { console.log(err);
                  }
                )}
               

}
