import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
const routes: Routes = [{ path: '', component: HomeComponent },{ path: 'products', component: ProductListingComponent },
{ path: 'products/new', component: NewProductComponent },{ path: 'products/edit/:id', component: EditProductComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
