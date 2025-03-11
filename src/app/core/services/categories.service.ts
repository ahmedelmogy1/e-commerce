import { environments } from './../environments/environments';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private readonly _HttpClient =inject(HttpClient)
  constructor() { 
  }

  getAllCaregories():Observable<any>{
  return this._HttpClient.get(`${environments.baseUrl}/api/v1/categories`)
  }
}
