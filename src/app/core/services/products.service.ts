import { environments } from './../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts } from '../interface/iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }
  userToken!:any;

  getAllProducts():Observable<any>{
    return this._HttpClient.get(`${environments.baseUrl}/api/v1/products`)
  }

  getProductDetails(pId:string|null):Observable<any>{
    return this._HttpClient.get(`${environments.baseUrl}/api/v1/products/${pId}`)
  }

  addProductToCart(idP:string):Observable<any>{
    if(sessionStorage.getItem('token') !== 'undefined'&&sessionStorage.getItem('token') !== 'null') this.userToken={token:sessionStorage.getItem('token')} 
    
    return this._HttpClient.post(`${environments.baseUrl}/api/v1/cart`,{  "productId":idP} ,{headers:this.userToken})
  }

}
