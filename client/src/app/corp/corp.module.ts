import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

//import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    //HomeComponent
  //ToolbarComponent
],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule
    /*RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'login', pathMatch: 'full'}])*/
  ],
  providers: [],
  bootstrap: [] //HomeComponent
})
export class CorpModule { }

