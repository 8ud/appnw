import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkErrorComponent } from './work-error/work-error.component';
import { WorkDeuxComponent } from './work-deux/work-deux.component';
import { WorkUnComponent } from './work-un/work-un.component';
import { TestGuardGuard } from './test-guard.guard';
import { LoginComponent } from './login/login.component';
import { M1Component, M2Component, S1Component, S2Component } from './mtest';

const routes: Routes = [
   { path: "home", component : WorkUnComponent},  // ajout des routes path
   { path: "", component : WorkUnComponent},
   { path: "deux", component : WorkDeuxComponent, canActivate : [TestGuardGuard]},
   {path: "login", component : LoginComponent},
   // {path: 'mtest' , loadChildren : './mtest/mtest.module#MtestModule'}, //chemin d'acces # + nom de la classe
   {path : "mtest" , children : [
      {path : "m1" , component : M1Component, children : [
         {path : "s1", component : S1Component , outlet: 'm1'},
         {path : "", redirectTo : '/mtest/m1/s1' , pathMatch: 'full'},  //redirection
         {path : "s2", component : S2Component , outlet: 'm1'}
      ]},
      {path : "" , redirectTo : '/mtest/m1' , pathMatch: 'full'}, //redirection
      {path : "m2" , component : M2Component}
   ]},
   { path: "**", component : WorkErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash : true , enableTracing : true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
