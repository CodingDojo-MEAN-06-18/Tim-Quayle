import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {BikeService} from '../bike.service';
import {AuthService} from '../auth.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  bikepic: File;
  constructor(private bikeService: BikeService,
              private authService: AuthService,
              private router: Router) { }
  mybike = {};
  mybikes = [];
  authfailure=false;
  sessionid='';
  ngOnInit() {
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
  
   
   
    let observer =  this.bikeService.getmyBikes();
    observer.subscribe(
    (response) =>{
      console.log("GOT BIKES?",response);
      this.mybikes=response;
    },
    (Error) =>{
      console.log("GOT ERROR?",Error);
   
      })
    
    }
    
 
  onFileChanged(event){
    console.log("file?")
    this.bikepic = event.target.files[0]
    console.log(this.bikepic);
    this.bikeService.uploadPic(this.bikepic);
  }
    onCreate(event: Event,form: NgForm){
      event.preventDefault();
      console.log("clicked!",form.value)
      let foo = this.bikeService.createBike(form.value);
      foo.subscribe(
         (response) => {
           console.log(response);
         },
        (Error) => {
          console.log(Error);
        })
 //update our personal bike listing after the create
 let observer =  this.bikeService.getmyBikes();
 observer.subscribe(
 (response) =>{
   console.log("GOT BIKES?",response);
   this.mybikes=response;
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
          //update our personal bike listing after the delete
       let observer =  this.bikeService.getmyBikes();
       observer.subscribe(
       (response) =>{
         console.log("GOT BIKES?",response);
         this.mybikes=response;
       },
       (Error) =>{
         console.log("GOT ERROR?",Error);
      
         })
       
       
      
      }
      onUpdate(event: Event,form: NgForm){
        event.preventDefault();
        console.log("update BIKE", form.value)
         
          let o = this.bikeService.updateBike(form.value);
          o.subscribe(
           (response) => {
             console.log(response);
           },
          (Error) => {
            console.log(Error);
          })
      //update our personal bike listing after the update
      let observer =  this.bikeService.getmyBikes();
      observer.subscribe(
      (response) =>{
        console.log("GOT BIKES?",response);
        this.mybikes=response;
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

