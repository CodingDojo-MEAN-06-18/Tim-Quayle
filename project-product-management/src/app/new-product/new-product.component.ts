import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import {NgForm} from '@angular/forms';
import {Product} from '../models/product';
import {Router} from "@angular/router";
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  p: Product = new Product;
  constructor(private _dataService: DataService,private router: Router) { }
  index=0;
  ngOnInit() {
  }

  CreateProduct(event: Event,myForm: NgForm){
    event.preventDefault();
   console.log(this.p);
    //method is contained in our service, and pushes a value of "Product" into our product array.
    this.index=this._dataService.getIndex();
    //index is stored in service to give it some "PseudoPersistance"
    this.p.id=this.index;
    //method is contained in our service, and pushes a value of "Product" into our product array.
    this._dataService.addProduct(this.p);
    this.p = new Product();
    //increment our index
    this.index++;
    //store the new index in our service 
    this._dataService.storeIndex(this.index);
    //route to /products
    this.router.navigate(['products']);
  }

}
