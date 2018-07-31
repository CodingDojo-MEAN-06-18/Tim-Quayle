import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BikeService {




  constructor(private http: HttpClient) { }
  searchBikes(search: string) :any {
    console.log("INSERVICE searching for a  bike",search)
    return this.http.get('/searchbikes/'+search);
  }

//future feature
  uploadPic(pic) {
    const uploadData = new FormData();
    uploadData.append('myFile', pic, pic.name);
    console.log(uploadData);
    console.log("UP PIC client side service")
    this.http.post('/uploadpic', uploadData)
  }
  createBike(bike) :any { 
    console.log("INSERVICE making bike", bike)
      return this.http.post('/createbike', bike);
     // return this.http.get('/notsget');
    }
    getallBikes() :any { 
      console.log("INSERVICE getting all bikes")
        return this.http.get('/getallbikes');
       // return this.http.get('/notsget');
      }
      getmyBikes() :any { 
        console.log("INSERVICE getting all bikes")
          return this.http.get('/getmybikes');
         // return this.http.get('/notsget');
        }  
        delBike(bike) :any {
          console.log("INSERVICE deleting a bike")
          return this.http.delete('/delbike/'+bike._id);
        }
        updateBike(bike) :any {
          console.log("INSERVICE updating a bike")
          return this.http.post('/updatebike',bike);
        }
      
      }
