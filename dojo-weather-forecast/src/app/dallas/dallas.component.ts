import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  humidity=0;
  tempavg=0;
  temphigh=0;
  templow=0;
  status='';
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    console.log("HERE!")
    this._dataService.getweatherInfo('dallas,tx')
      .subscribe(
        (response) => {
         // this.score = response['public_repos']+response['followers'];
         this.humidity = response.main['humidity'];
         this.tempavg = Math.round(((response.main['temp']-273)*9/5)+32);
         this.temphigh = Math.round(((response.main['temp_max']-273)*9/5)+32);
         this.templow = Math.round(((response.main['temp_min']-273)*9/5)+32);
         this.status = response.weather[0].description;
         console.log(response);
         console.log(response.weather[0].description);
        },
        (err) => { console.log(err);}
      );
     // this.errorflag=false;
     // form.reset();
    } 

}
