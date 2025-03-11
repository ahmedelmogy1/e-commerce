import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class WishService {

   constructor(private  _HttpClient:HttpClient) { }   


    addProductToWishlist(pId:string):Observable<any>{
      return this._HttpClient.post(`${environments.baseUrl}/api/v1/wishlist`,{productId:pId})
    } 
            
  



   getLoggedUserWish():Observable<any>{
    return this._HttpClient.get(`${environments.baseUrl}/api/v1/wishlist`)
   }
    
    removerProductFromWishlist(pId:string):Observable<any>{
      return this._HttpClient.delete(`${environments.baseUrl}/api/v1/wishlist/${pId}`)
    }


 }  
