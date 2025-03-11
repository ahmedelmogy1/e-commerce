import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor() { }

private readonly _HttpClient = inject(HttpClient)

getAllBrands():Observable<any>{
 return this._HttpClient.get(environments.baseUrl+'/api/v1/brands')
}

}
