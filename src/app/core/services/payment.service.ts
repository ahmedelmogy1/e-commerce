import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _HttpClient:HttpClient) { }

  userToken!:any;
  checkoutSession(cartId:string|null,shippingData:any):Observable<any>{
    if(sessionStorage.getItem('token') !== 'undefined'&&sessionStorage.getItem('token') !== 'null') this.userToken={token:sessionStorage.getItem('token')} 
    return this._HttpClient.post(`${environments.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=${environments.url}`,{"shippingAddress": shippingData},{headers:this.userToken})
  }
  cashOrder(cartId:string|null,shippingData:any):Observable<any>{
    if(sessionStorage.getItem('token') !== 'undefined'&&sessionStorage.getItem('token') !== 'null') this.userToken={token:sessionStorage.getItem('token')} 
    console.log(cartId);
    
    return this._HttpClient.post(`${environments.baseUrl}/api/v1/orders/${cartId}`,{"shippingAddress": shippingData},{headers:this.userToken})
  }
}
