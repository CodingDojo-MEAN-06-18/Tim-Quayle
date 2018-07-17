import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-formentry',
  templateUrl: './formentry.component.html',
  styleUrls: ['./formentry.component.css']
})
export class FormentryComponent implements OnInit {
  username = '';
  score=0;
  errorflag=false;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

onSubmit(event: Event, form: NgForm){
  
  this._dataService.githubInfo(this.username)
    .subscribe(
      (response) => {
        this.score = response['public_repos']+response['followers'];
        console.log(this.score);
      },
      (err) => {this.errorflag=true; console.log(err);}
    );
    this.errorflag=false;
    form.reset();
  } 
}
