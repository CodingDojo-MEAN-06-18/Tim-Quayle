import { Component,Input, OnInit,OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() mypower: number;
  @Input() myrank: string;
  newpower=(this.mypower)*2;
//CalcPower(mypower,myrank);
  //console.log(mypower);
  constructor() { }
  ngOnInit() {
    this.newpower= this.mypower*2;
    console.log("NP",this.newpower);
  }
  
  ngOnChanges() {
    if(this.myrank==="human"){
      this.mypower=this.mypower*1;
                         }
      if(this.myrank==="saiyan"){
      this.mypower=this.mypower*10;              
                           }
      if(this.myrank==="supersaiyan"){
      this.mypower=this.mypower*90;
                              }
      if(this.myrank==="supersaiyan2"){
      this.mypower=this.mypower*150;              
                                }
      if(this.myrank==="supersaiyan3"){
      this.mypower=this.mypower*250;
                                    }
      if(this.myrank==="supersaiyan4"){
      this.mypower=this.mypower*500;              
                                                            }         
                              } 
 
}