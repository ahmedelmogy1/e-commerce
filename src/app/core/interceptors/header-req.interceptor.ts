import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const headerReqInterceptor: HttpInterceptorFn = (req, next) => {
let _PLATFORM_ID = inject(PLATFORM_ID)
if(isPlatformBrowser(_PLATFORM_ID)){
  if(req.url.includes('cart') || req.url.includes('orders') || req.url.includes('wishlist')){
    if(sessionStorage.getItem('token')){
      req=req.clone({
        setHeaders:{token:sessionStorage.getItem('token')!}
      })
     }
  }
}
  return next(req);
};
