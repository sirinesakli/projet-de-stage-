import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { AsideComponent } from './aside/aside.component';

const routes: Routes = [
  {
    path:'',component:AsideComponent
  },



];
         

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
