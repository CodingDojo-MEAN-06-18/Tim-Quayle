import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }
makeNote(note: string){
 console.log("inservice:", note)
  this._http.post('http://localhost:8000/notesadd/',note);
}

getNotes() :any{
  console.log("GETNOTES!")
  return this._http.get('http://localhost:8000/notesget/');
}
}
