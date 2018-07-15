import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-votecalc',
  templateUrl: './votecalc.component.html',
  styleUrls: ['./votecalc.component.css']
})
export class VotecalcComponent implements OnInit {
  @Input() myscore: number;
  @Input() myid: number;
  @Output() passUpscore = new EventEmitter();
  qobj = {};
  constructor() { }
  voteUp()
  {
    this.myscore=this.myscore+1;
    this.qobj = {
      id: this.myid,
      score: this.myscore,
      delflag: 0
     }
    this.passUpscore.emit(this.qobj);
   // this.passUpid.emit(this.myid);
  }
  voteDown(){
  console.log("VOTEDOWN!")
    this.myscore=this.myscore-1;
    this.qobj = {
      id: this.myid,
      score: this.myscore,
      delflag: 0
                }
    this.passUpscore.emit(this.qobj);  
  }
  voteDelete(){
    this.qobj = {
      id: this.myid,
      score: this.myscore,
      delflag: 1
                }
    this.passUpscore.emit(this.qobj);  



  }
  ngOnInit() {
  }

}
