import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {CorpModule} from './corp/corp.module';
import {HomeComponent} from './corp/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    CorpModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'home2', component: HomeComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: '**', redirectTo: 'login', pathMatch: 'full'}
    ]),
    
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
