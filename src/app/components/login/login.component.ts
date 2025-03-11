import { AuthService } from './../../core/services/auth.service';
import { NgClass } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnDestroy{
  constructor(private _AuthService:AuthService,private _Router:Router){}

  loginSub?:Subscription
  timeOutId:any
  resText!:string
  loding:boolean=false 
logInForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)])
})
supmitData(){
  if(this.logInForm.valid){
   console.log(this.logInForm); 
   this.loding=true


   this.loginSub= this._AuthService.logInUser(this.logInForm.value).subscribe({
    next:(res)=>{
      console.log(res);
      this._AuthService.email=res.user.email
      this.resText=res.message
      this.loding=false
      
     if(typeof sessionStorage !== "undefined"){
      sessionStorage.setItem('token',res.token)
      this._AuthService.saveDataUser()
     }
     this.timeOutId= setInterval(()=>{
        this._Router.navigate(['/home'])
      },2000)
      
    },
    error:(error)=>{
      console.log(error);
      this.resText=error.error.message
      this.loding=false
    },
    complete:()=>{

    }
   })
  }else{
    this.logInForm.markAllAsTouched()
   }
}


ngOnDestroy() {
  if (this.loginSub) {
    this.loginSub.unsubscribe();
  } else {
  }
  clearInterval(this.timeOutId)
}


}
