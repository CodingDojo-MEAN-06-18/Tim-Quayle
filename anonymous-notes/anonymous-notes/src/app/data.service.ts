import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { this.getNotes();}
  makeNote(note){
    console.log("IN POST DATA SERVICE")
    this._http.post('/notesadd', note).subscribe(
      (data) =>{
        console.log("success!");
             },
      (err) => { console.log(err);}
    )}
  




getNotes() :any{
  console.log("GETNOTES!")
  return this._http.get('/notesget');
               }
}
