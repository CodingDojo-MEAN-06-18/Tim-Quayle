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
  updateProduct(product: Product){
    this.products = [...this.products.filter(p => p.id!==product.id),product]
   // this.products.push(product);

  }
  deleteProduct(product) {
    const idx = this.products.indexOf(product);
     this.products.splice(idx,1);
  console.log("AFTERSPLICE: ", this.products)
    }
  getProduct(id: number) :Product{
return this.products.find(product => id===product.id);
     
  }


}
