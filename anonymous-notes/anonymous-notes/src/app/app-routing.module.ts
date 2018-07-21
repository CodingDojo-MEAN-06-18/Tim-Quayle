import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotemakerComponent } from './notemaker/notemaker.component';
import { NotelisterComponent } from './notelister/notelister.component';

const routes: Routes = [{ path: '', component: NotemakerComponent} ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }