import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../data.service';
import {Product} from '../models/product';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  products: Array<Product> = [];
  productid='';
  product: Product;
  index: number;
  id: number;
  newtitle: string;
  newprice: number;
  newimageurl: string;
  constructor(private _dataService: DataService,private _route: ActivatedRoute,
    private router: Router) {
    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'));
      this.productid=params.get('id')
      this.id = parseInt(this.productid, 10);
      //fetch our product array from service
      this.products=this._dataService.getProducts();
      //extract the product we are dealing with from the product array (thank you coding dojo, cant wait until we add a backend)
      for (let idx = 0; idx < this.products.length; idx++) {
        if (this.products[idx].id == this.id) {
          this.product = this.products[idx];
          console.log("EPRODUCT",this.product) 
          break;
                                                  }
                                                }
   //why are the product "value" properties not getting populated on the view?? fix this bug
    })
   }

   ngOnInit() {
  
  } 
 
  editProduct(event: Event,myForm: NgForm){
    console.log("ECLICKED!")
    event.preventDefault();
    // console.log(this.newtitle);
     this._dataService.updateProduct(this.index, this.newtitle, this.newprice, this.newimageurl);
     //route to /products
     this.router.navigate(['products']);   
    }
    deleteProduct(product){
      this._dataService.deleteProduct(product);
      //this._dataService.decIndex();
      this.router.navigate(['products']); 
    }




}
