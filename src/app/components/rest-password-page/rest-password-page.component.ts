import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForgetPasswordService } from '../../core/services/forget-password.service';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rest-password-page',
  standalone: true,
  imports: [NgClass,ReactiveFormsModule],
  templateUrl: './rest-password-page.component.html',
  styleUrl: './rest-password-page.component.css'
})
export class RestPasswordPageComponent  implements OnDestroy, OnInit{
  constructor(private _ForgetPasswordService : ForgetPasswordService,private _Router :Router,private _ToastrService:ToastrService){}
 
  ngOnInit(): void {
    if(!this._ForgetPasswordService.stateRestPage){
      this._Router.navigate([`/login`])
    }
  }



  loding:boolean=false 


  resetForm:FormGroup=new FormGroup({
    password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
    rePassword:new FormControl(null),

  },this.confirmPassword)

  confirmPassword(g:AbstractControl){
    if(g.get('password')?.value===g.get('rePassword')?.value){
      return null;
    }
    else{
      return {missMatch:true};
    }
  }

  supmitData(){
    if(this.resetForm.valid){
     console.log(this.resetForm); 
     this.loding=true
     this._ForgetPasswordService.resetPassword(this._ForgetPasswordService.email.getValue(),this.resetForm.value.password).subscribe({
       next:(res)=>{console.log(res.message);
        this._ToastrService.success('' , 'fresh cart',{closeButton:true, progressBar:true})
         this.loding=false;
         console.log(res);
         setInterval(()=>{
           this._Router.navigate(['/login'])
         },400)
         
         
       },
       
     })
 
    }else{
     this.resetForm.setErrors({missMatch:true})
     this.resetForm.markAllAsTouched()
    }
    
  
 }


  ngOnDestroy(): void {
    this._ForgetPasswordService.stateRestPage.next(false)
  }

  

}
