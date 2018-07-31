import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  eventChanged = new BehaviorSubject<any>({});
  goldcount: BehaviorSubject<number> = new BehaviorSubject(0);
 gobj = {
   gcnt: 0,
   bstring: '',
   mpstring: '',
 }
  
  constructor() {  }
  
  makeNum(min: number, max: number){
   const num =  Math.round(Math.random() * (max - min) + min);
   //this.goldcount = this.goldcount + num;
   console.log("NUM",num);
   console.log("GC ",this.goldcount);
   return num;
  }
  addGold(newgold: any): void{
    const tempData = this.goldcount.getValue();
     //tempData.push(newgold);
    this.goldcount.next(newgold);
  }
  newGold(lgoldcount,btype){
    console.log("GOLD: ",lgoldcount);
    console.log("building ",btype);
   this.gobj.gcnt = lgoldcount;
   this.gobj.bstring = btype;
   this.eventChanged.next(this.gobj);
  }
 
}
