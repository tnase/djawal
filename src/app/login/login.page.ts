import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   logo: any;
   username:any ;
   password:any ;
  constructor(private router: Router) { }

  ngOnInit() {
    this.logo = '../../assets/imgs/logo.png' ;
  }

  _login(){
      this.router.navigate(['/commandes']) ;
  }

}
