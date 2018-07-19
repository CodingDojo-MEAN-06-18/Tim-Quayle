import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Product} from '../models/product';
import {Router} from "@angular/router";
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  products: Array<Product> = [];
  constructor(private _dataService: DataService,
    private router: Router ) { }

  ngOnInit() {
    this.products=this._dataService.getProducts();
  }
  deleteProduct(product){
    this._dataService.deleteProduct(product);
    //this._dataService.decIndex();
    this.router.navigate(['products']); 
  }
}
