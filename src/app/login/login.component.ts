import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../shared/material.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  username: string;
  password: string;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  login(event){

    //npr da proveri ako ga ima u bazi, else da mu izbaci neki info
    if(this.username == 'admin' && this.password == 'admin'){
      //console.log("uspesno");
      //neki router da ga prebaci na home page
        this._router.navigate(['/home']);
    }
  }

}
