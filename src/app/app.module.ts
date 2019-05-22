import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule } from '@angular/common/http'; // a importer

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MtestModule } from './mtest/mtest.module';
import { Cmp2Component } from './cmp2/cmp2.component';
import { WorkUnComponent } from './work-un/work-un.component';
import { WorkDeuxComponent } from './work-deux/work-deux.component';
import { WorkErrorComponent } from './work-error/work-error.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    Cmp2Component,
    WorkUnComponent,
    WorkDeuxComponent,
    WorkErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MtestModule, // a rajouter
    HttpClientModule //a importer
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
