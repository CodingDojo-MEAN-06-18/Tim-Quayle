import { Injectable } from '@angular/core';
import {Product} from './models/product';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  index=0;
  products: Array<Product> = [];
  constructor() { }
  getProducts() :Product[]{
      return(this.products);
  }
   addProduct(p: Product){
       this.products.push(p);
       console.log(this.products);
  }
  storeIndex(x: number){
    this.index=x;
  }
  getIndex(){
    return(this.index);
  }
  updateProduct(index: number, newtitle: string,newprice: number, newimageurl: string){
     console.log("INSERVICE");
    this.products[index].title = newtitle;
     this.products[index].price = newprice;
     this.products[index].imageurl = newimageurl;
     console.log("UPDATED PRODUCT:",this.products);

  }
  deleteProduct(product) {
    const idx = this.products.indexOf(product);
     this.products.splice(idx,1);
  console.log("AFTERSPLICE: ", this.products)
    }
  


}
