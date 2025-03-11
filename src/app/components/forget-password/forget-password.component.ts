import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForgetPasswordService } from '../../core/services/forget-password.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
imports: [ReactiveFormsModule,NgClass],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {

private readonly _ForgetPasswordService = inject(ForgetPasswordService)
private readonly _ToastrService = inject(ToastrService)
private readonly _Router = inject(Router)
forgetPasswordS?:Subscription

  forgetPassword= new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email])
  })
  supmitData(){
    if(this.forgetPassword.valid){
     console.log(this.forgetPassword); 
     this.forgetPasswordS= this._ForgetPasswordService.forgetPassword(this.forgetPassword.controls.email.value).subscribe({
      next:(res)=>{
        this._ToastrService.success(res.message , 'fresh cart',{closeButton:true, progressBar:true})
        this._ForgetPasswordService.stateForgetPassword.next(true)
        this._ForgetPasswordService.email.next(this.forgetPassword.value.email!)
        console.log(this._ForgetPasswordService.stateForgetPassword.getValue());
        this._Router.navigate([`/resetPassword/verifyPage`])
        console.log(res);
      },
      error:(error)=>{
        console.log(error);
        // this.resText=error.error.message
        // this.loding=false
      },
      complete:()=>{
  
      }
     })
    }else{
      this.forgetPassword.markAllAsTouched()
     }
  }
}
