import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map,catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic '+btoa("djawalproject2019:LKqI6G/AikKCQrN0zqZFlg==")
  })
};



const OAUTHTOKEN = "/oauth/token";
const getuser= "dashboard/getUtilsateurByPseudo/"
const ACCESSTOKEN = "access_token";
const USERNAME="username"

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  local=false; 
  usr:any;
  url:string=environment.baseUrl+OAUTHTOKEN
  url2:string=environment.baseUrl+getuser;
  constructor(private http:HttpClient,private router:Router) { }

  login(username: string, password: string) {
    const params = new HttpParams({
      fromObject: {
        'username':username,
        'password':password,
        'grant_type': 'password',
      }
    });
    this.http.post(this.url,params.toString(),httpOptions).subscribe((data)=> 
      {
      
        console.log(data[ACCESSTOKEN]);
        localStorage.setItem(ACCESSTOKEN,data[ACCESSTOKEN]);
        localStorage.setItem(USERNAME,username);
        this.getuserloggin().subscribe((data) =>{
          this.usr=data.object;
          console.log(this.usr)
          
  //vérification de utilisateurs
         if(this.usr.roles[0].roleName=='ROLE_COURSIER')
         {
          localStorage.setItem('user', JSON.stringify(this.usr))          
           this.router.navigate(['/commandes']);
          alert("Vous avez l'autorisation de vous connecter")
         }else{
           alert("connexion echouée");
          // this.router.navigate(['/login']);
         }
      });            

       
      },
      error => {
        console.log(error.status+this.url)
        alert("Login ou Mot de passe Incorrect");
      }
    )
    return true;
} 

getuserloggin():Observable<any> {
  let id=localStorage.getItem(USERNAME);
  let url=this.url2+id
  let user=localStorage.getItem(ACCESSTOKEN);
    console.log(user);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ user
    })
  };
  return this.http.get(url,httpOptions).pipe(
    map(this.extractData));
}

private extractData(res: Response) {
  let body = res;
  return body || { };
} 

logout() {
  localStorage.removeItem(ACCESSTOKEN);
 // Cookie.delete('access_token');
 
}
islogged()
{
  let token;
   token=localStorage.getItem(ACCESSTOKEN);
   console.log(token)
   if(token==null)
   {
      this.router.navigate(['/signup']);
   }
}


}
