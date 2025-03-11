// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//  const _Router = inject(Router)
//   if(sessionStorage.getItem('token')&&typeof window !== "undefined"&&window.sessionStorage){
//     return true;
//   }
//   else{
//     _Router.navigate(['/auth/login'])
//     return false
//   }
// };



import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);

  if (typeof window !== 'undefined' && window.sessionStorage) {
    console.log(typeof window !== 'undefined');
    
    if (sessionStorage.getItem('token')) {
      return true; 
    }
  }


  _Router.navigate(['/login']);
  return false; 
};
