import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattlegroundComponent } from './battleground/battleground.component';
import { RankingsComponent } from './rankings/rankings.component';
import { BattleresultsComponent } from './battleresults/battleresults.component';
const routes: Routes = [{ path: '', component:  BattlegroundComponent },
{ path: 'rankings', component:   RankingsComponent },
{ path: 'results', component:  BattleresultsComponent },
                        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
