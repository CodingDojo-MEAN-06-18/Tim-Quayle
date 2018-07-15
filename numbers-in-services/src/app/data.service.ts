import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
anumbers: number[] = [];
bnumbers: number[] = [];
difference: number = 0;
constructor() { }


getaNum(): number[]{
this.anumbers = [];
  let foo =  Math.floor(Math.random() *10);
 let bar =  Math.floor(Math.random() *10);
 this.anumbers.push(foo);
 this.anumbers.push(bar);
 return this.anumbers;
}
getbNum(): number[]{
  this.bnumbers = [];
    let foo =  Math.floor(Math.random() *10);
   let bar =  Math.floor(Math.random() *10);
   this.bnumbers.push(foo);
   this.bnumbers.push(bar);
   return this.bnumbers;
}
diff(): number{
    this.difference = (this.anumbers[0] + this.anumbers[1]) - (this.bnumbers[0] + this.bnumbers[1])
    return this.difference;
   }
  }
