import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BattleService } from './battle.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BattlegroundComponent } from './battleground/battleground.component';
import { RankingsComponent } from './rankings/rankings.component';
import { BattleresultsComponent } from './battleresults/battleresults.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BattlegroundComponent,
    RankingsComponent,
    BattleresultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [BattleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
