import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TeamService} from './team.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponentComponent } from './player-list-component/player-list-component.component';
import { PlayerManageStatusComponentComponent } from './player-manage-status-component/player-manage-status-component.component';
import { AddPlayerComponentComponent } from './add-player-component/add-player-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponentComponent,
    PlayerManageStatusComponentComponent,
    AddPlayerComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
