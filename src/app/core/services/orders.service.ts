import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../environments/environments';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private _HttpClient:HttpClient,private _CartService:CartService) { }

  cartOwner!:string|null

  getUserOrders():Observable<any>{

    return this._HttpClient.get(`${environments.baseUrl}/api/v1/orders/user/${this._CartService.cartOwnerId}`)
  }
  getAllOrders():Observable<any>{

    return this._HttpClient.get(`${environments.baseUrl}/api/v1/orders`)
  }
}
