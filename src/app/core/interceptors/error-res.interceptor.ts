import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorResInterceptor: HttpInterceptorFn = (req, next) => {
  let _ToastrService =inject(ToastrService)
  return next(req).pipe(
    catchError((err)=>{
      console.log(err);
     _ToastrService.error(err.error.message , 'fresh cart',{closeButton:true, progressBar:true})
      return throwError(()=>err)
    })
  );
};
