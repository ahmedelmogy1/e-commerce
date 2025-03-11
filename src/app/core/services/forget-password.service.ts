import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environments } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  stateForgetPassword: BehaviorSubject<boolean> = new BehaviorSubject(false);
  stateRestPage: BehaviorSubject<boolean> = new BehaviorSubject(false);
  email: BehaviorSubject<string> = new BehaviorSubject('');

  constructor( private _HttpClient:HttpClient) { }

  forgetPassword(E:string|null):Observable<any>{


    return this._HttpClient.post(`${environments.baseUrl}/api/v1/auth/forgotPasswords`,{'email':E})
  }
  verifyPassword(code:string):Observable<any>{


    return this._HttpClient.post(`${environments.baseUrl}/api/v1/auth/verifyResetCode`,{'resetCode':code})
  }
  resetPassword(email:string,newPassword:string):Observable<any>{


    return this._HttpClient.put(`${environments.baseUrl}/api/v1/auth/resetPassword`,
  {
    "email":email,
    "newPassword": newPassword
  })
  }


}
