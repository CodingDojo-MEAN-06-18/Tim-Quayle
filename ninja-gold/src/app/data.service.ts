import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
goldcount=0;
  constructor() {  }
  
  makeNum(min: number, max: number){
   const num =  Math.round(Math.random() * (max - min) + min);
   //this.goldcount = this.goldcount + num;
   console.log("NUM",num);
   console.log("GC ",this.goldcount);
   return num;
  }
 
}
