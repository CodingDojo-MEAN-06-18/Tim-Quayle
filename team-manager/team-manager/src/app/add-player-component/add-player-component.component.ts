import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";
@Component({
  selector: 'app-add-player-component',
  templateUrl: './add-player-component.component.html',
  styleUrls: ['./add-player-component.component.css']
})
export class AddPlayerComponentComponent implements OnInit {
player = {
  name: '',
  position: ''
}
  constructor(private _dataService: TeamService,
    private _router: Router) { }
   onSubmit(Event: Event, Form: NgForm){
  Event.preventDefault();
    this._dataService.addPlayer(this.player);
    this._router.navigateByUrl('/players/list');
  }
  ngOnInit() {
  }

}
