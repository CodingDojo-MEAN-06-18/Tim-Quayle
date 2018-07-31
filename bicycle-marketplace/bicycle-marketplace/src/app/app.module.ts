import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListingsComponent } from './listings/listings.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import   {BikeService } from './bike.service';
import   {AuthService } from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListingsComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BikeService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
