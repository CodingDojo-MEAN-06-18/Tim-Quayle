import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponentComponent} from './player-list-component/player-list-component.component';
import { AddPlayerComponentComponent} from './add-player-component/add-player-component.component';
import { PlayerManageStatusComponentComponent} from './player-manage-status-component/player-manage-status-component.component';
const routes: Routes = [{ path: 'players/addplayer', component: AddPlayerComponentComponent },
{ path: 'status/game/:id', component: PlayerManageStatusComponentComponent },
{ path: 'players/list', component: PlayerListComponentComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
