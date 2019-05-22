import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { M1Component } from './m1/m1.component';
import { M2Component } from './m2/m2.component';


const routes: Routes = [
   { path : 'm1' , component : M1Component},
   { path : '' , component : M1Component}, // route par defaut
   { path : 'm2' , component : M2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // ajout des imports
  exports: [RouterModule]
})
export class MtestRoutingModule { }
