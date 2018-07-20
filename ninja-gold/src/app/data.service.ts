@Injectable({
  providedIn: 'root'
})
export class DataService {
  goldcount: BehaviorSubject<number> = new BehaviorSubject(0);
constructor() {  }
  
  makeNum(min: number, max: number){
   const num =  Math.round(Math.random() * (max - min) + min);
   console.log("NUM",num);
   //console.log("GC ",this.goldcount);
   return num;
  }
  addGold(newgold: any): void{
    const tempData = this.goldcount.getValue();
    this.goldcount.next(newgold);
  }
}

