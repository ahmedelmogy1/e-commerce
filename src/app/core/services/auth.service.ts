import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../environments/environments';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any
  email!:string
  constructor(private _HttpClient:HttpClient) { }
  registerUser(userData:object):Observable <any>{
    return this._HttpClient.post(`${environments.baseUrl}/api/v1/auth/signup`,userData)
  }

  logInUser(userData:object):Observable <any>{
    return this._HttpClient.post(`${environments.baseUrl}/api/v1/auth/signin`,userData)
  }

  saveDataUser(){
    if(sessionStorage.getItem('token')!=='undefined'){
      this.userData=jwtDecode(sessionStorage.getItem('token')!)
    }
    
  }
}
