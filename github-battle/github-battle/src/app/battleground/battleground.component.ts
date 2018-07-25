import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { BattleService } from '../battle.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.css']
})
export class BattlegroundComponent implements OnInit {
sub1=false;
user1login: string = '';
user1pic: string ='';
sub2=false;
user2login: string = '';
user2pic: string ='';
score1: number =0;
score2: number =0;
//user=false;
errorflag=false;
errorflag2=false;
x=false;
xx=false;
constructor(private _dataService: BattleService,
              private _router: Router) { }

  ngOnInit() {
  }


  onSubmit1(event: Event, form: NgForm){
    
    event.preventDefault();
    
    this.sub1=true;
    let foo = this._dataService.githubInfo(form.value.username1);
    console.log(foo);     
    this.xx=true;
    foo.subscribe(
      (response) => {
         this.errorflag2=false;
        
          this.score1 = response['public_repos']+response['followers'];
          this.score1= this.score1*12;
          this.user1pic= response['avatar_url']
          this.user1login= response['login']
          console.log("SCORE",this.score1);
                         
        },
       (err) => { this.errorflag2=true; this.sub1=false;}
      )
      this.errorflag2=false;
      form.reset();  
                                                             }   
 onSubmit2(event: Event, form: NgForm){
this.x=true;
  event.preventDefault();
    this.sub2=true;
    let foo = this._dataService.githubInfo(form.value.username2);
                    
    foo.subscribe(
        (response) => {
          this.errorflag=false;
          console.log('we are here!');
          this.score2 = response['public_repos']+response['followers'];
          this.score2=this.score2*12;
          this.user2pic= response['avatar_url']
          this.user2login= response['login']
          console.log("SCORE2",this.score2);
                         
        },
        (err) => {this.errorflag=true; console.log(err);}
      );
      this.errorflag=false;
      form.reset();  
                                                             }   
battleMe(){
 console.log("BATTLE!!")
  let user1 = {
   name: this.user1login,
   score: this.score1,
   pic: this.user1pic

  }
  let user2 = {
    name: this.user2login,
    score: this.score2,
    pic: this.user2pic
 
   }
   this._dataService.battle(user1, user2);
   this._router.navigate(['/results'])
  }


}
