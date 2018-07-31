import { Component, OnInit } from '@angular/core';
import {BikeService} from '../bike.service';
import {NgForm} from '@angular/forms';
import   {AuthService } from '../auth.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
negsearch = false;
  bikes = [];
contact = {
  firstname: '',
  lastname: '',
  email: ''
};
sessionid='';
authfailure=false;
constructor(private bikeService: BikeService,
            private authService: AuthService,
            private router: Router
) { 
 
 }

  ngOnInit() {
 let observer =  this.bikeService.getallBikes();
 observer.subscribe(
 (response) =>{
   console.log("GOT BIKES?",response);
   this.bikes=response;
 },
 (Error) =>{
   console.log("GOT ERROR?",Error);

   })  
   let o2 =  this.authService.getSessionid();
   o2.subscribe(
    (response) =>{
      console.log("GOT Sessionid?",response);
      if(response==="nosessionid"){
      
        this.authfailure=true;
      }
     else {this.authfailure=false;
       this.sessionid=response;}
 
      },
    (Error) =>{
      console.log("GOT ERROR?",Error);
   
      })  
  
  }
getContact(userid: string){
  console.log("contact UID: ", userid)
  let observer =  this.authService.getContact(userid);
 observer.subscribe(
 (response) =>{
   console.log("GOT CONTACT?",response);
   this.contact=response;
   console.log("FN",this.contact[0].firstname)
   confirm("Name:" + this.contact[0].firstname + "\n" + "Email:" + this.contact[0].email);  
  },
 (Error) =>{
   console.log("GOT ERROR?",Error);

   })  




}
delBike(bike){
  console.log("DELBIKE", bike)
  let o = this.bikeService.delBike(bike);
  o.subscribe(
   (response) => {
     console.log(response);
   },
  (Error) => {
    console.log(Error);
  })
  let observer =  this.bikeService.getallBikes();
  observer.subscribe(
  (response) =>{
    console.log("GOT BIKES?",response);
    this.bikes=response;
  },
  (Error) =>{
    console.log("GOT ERROR?",Error);
 
    })  

  


}
onSearch(event: Event,form: NgForm){
     event.preventDefault();
     console.log("searchv:",form.value.sbox)
     let observer =  this.bikeService.searchBikes(form.value.sbox);
     observer.subscribe(
     (response) =>{
       console.log("GOT Search?",response);
      if(response==="negative"){
        console.log("NEGSEARCH!")
        this.bikes=[];
        this.negsearch=true;
      }
      else {
        this.negsearch=false;
        this.bikes=response;
      }
     },
     (Error) =>{
       console.log("GOT ERROR?",Error);
    
       })  
   




    }
    logOff(event: Event){
      console.log("LOGOFF CLICKED!")
      event.preventDefault();
   let ob =  this.authService.removeSessionid()
   ob.subscribe(
   (response) =>{

       console.log('returned',response);
       this.router.navigate(['']); 
      },

   (Error) =>
    { console.log("Error",Error);  }


   )
    
    }
}
