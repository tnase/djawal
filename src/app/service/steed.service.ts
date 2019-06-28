import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {API} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SteedService {

  constructor(private http:HttpClient) { }


  _listCommand(){
    this.http.get(API.GET_ALL_COMMAND);
    

  }

}
