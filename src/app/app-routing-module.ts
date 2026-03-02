import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { AichaListRes } from './aicha-list-res/aicha-list-res';
import { AichaDetailsRes } from './aicha-details-res/aicha-details-res';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'}, 
  {path:'list', component: AichaListRes},
  {path:'details/:id',component:AichaDetailsRes},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
