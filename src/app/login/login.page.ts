import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from  '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   logo: any;
   username:any ;
   password:any ;
  constructor(private router: Router,private loginService : LoginService ) { }

  ngOnInit() {
    this.logo = '../../assets/imgs/logo.png' ;
  }

  _login(){
    console.log(this.username+"++++"+this.password)
    this.loginService.login(this.username,this.password)
    
  }

}
