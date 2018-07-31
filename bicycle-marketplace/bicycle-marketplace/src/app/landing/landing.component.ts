import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import {BikeService} from '../bike.service';
import {Router} from "@angular/router";
import   {AuthService } from '../auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
     logerror: string = '';
     bikes = [];
     bike = {};
     badlogin = false;
     badlogin_5times = false;
     blcount=0;
     passShort=false;
     passmm=false;
     constructor(private bikeService: BikeService,
      private authService: AuthService,
      private router: Router) { }
  
  ngOnInit() {
  let observer =  this.bikeService.getallBikes();
  observer.subscribe(
  (response) =>{
    console.log("GOT BIKES?",response);
    this.bikes=response;
    let b = this.bikes.length;
    b=b-1;
    const rand=  Math.round(Math.random() * (b - 0) + 0);
    console.log("random ",rand)
    this.bike = this.bikes[rand];
    console.log("botd ",this.bike)
  },
  (Error) =>{
    console.log("GOT ERROR?",Error);
 
    })  

    
   
  }

  onLogin(event: Event,form: NgForm){
    event.preventDefault();
    console.log("VALUES ",form.value);
    let observer = this.authService.passLog(form.value);
    observer.subscribe(
    (response) =>{
      console.log("response",response);
      if(response==="valid"){
        console.log("VALLLLLID!")
        this.badlogin=false;
        this.router.navigate(['/browse']);
        }
        else if(response==="invalidlogin"){
          console.log(" Bad username!")
          this.badlogin=true;
          this.badlogin_5times=false;
        }
          else if(response==="invalidpassword"){
            console.log(" Bad password!!")
            this.badlogin=true;
            this.badlogin_5times=false; 
          } 
          else if(response==="5timesbad"){
            console.log("5 Bad passwords!!")
            this.badlogin_5times=true;
          } 
     },

     (Error) =>{
      console.log("Error",Error);
              }
            )
          }         
  
   
         
  onReg(event: Event,form: NgForm){
    event.preventDefault();
    console.log("VALUES ",form.value);
    if(form.value.password.length < 16){
      console.log("password too short!")
      this.passShort=true;
    }
    else if(form.value.password != form.value.cpassword){
      this.passmm=true;
    }
   else {
     this.passmm=false;
     this.passShort=false;
    let observer = this.authService.passReg(form.value);
    observer.subscribe(
    (response) =>{
      console.log("response",response);               
      this.router.navigate(['/browse']);   
  
    },
     (Error) =>{
      console.log("Error",Error);
     }          
    )
      }
  }                
                                               

}


