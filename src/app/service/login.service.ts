import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from './../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic '+btoa("djawalproject2019:LKqI6G/AikKCQrN0zqZFlg==")
  })
};



const OAUTHTOKEN = "oauth/token";
const getuser= "dashboard/getUtilsateurByPseudo/"
const ACCESSTOKEN = "access_token";
const USERNAME="username"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


}
