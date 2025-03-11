import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environments } from '../environments/environments';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _HttpClient: HttpClient) {}
  userToken!: any;
  cartOwnerId!:string
  countOfCart: BehaviorSubject<number> = new BehaviorSubject(0);

  getLoggedUserCart(): Observable<any> {
    return this._HttpClient.get(`${environments.baseUrl}/api/v1/cart`);
  }

  deletsSpacificProduct(idP: string): Observable<any> {
    return this._HttpClient.delete(
      `${environments.baseUrl}/api/v1/cart/${idP}`
    );
  }

  deleteAllProducts(): Observable<any> {
    return this._HttpClient.delete(`${environments.baseUrl}/api/v1/cart`);
  }

  changeCountOfProduct(idP: string, count: number): Observable<any> {
    return this._HttpClient.put(`${environments.baseUrl}/api/v1/cart/${idP}`, {
      count: count,
    });
  }
}
