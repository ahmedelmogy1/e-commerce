import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ForgetPasswordService } from '../../core/services/forget-password.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verify-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './verify-page.component.html',
  styleUrl: './verify-page.component.css'
})
export class VerifyPageComponent implements OnInit , OnDestroy {
 constructor (private _ForgetPasswordService:ForgetPasswordService , private _Router:Router,private _ToastrService:ToastrService){}

   ngOnInit(): void {
     if(!this._ForgetPasswordService.stateForgetPassword.getValue()){
      this._Router.navigate([`/resetPassword`])
     }
   }

   ngOnDestroy(): void {
      this._ForgetPasswordService.stateForgetPassword.next(false)
  }

     inputs: string[] = Array(6).fill('');

     onInput(index: number, event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.value.length > 0 && index < this.inputs.length - 1) {
        const nextInput = document.querySelectorAll<HTMLInputElement>('.verification-input input')[index + 1];
        nextInput.focus();
      }
      this.checkIfComplete();
    }
  
    onKeyDown(index: number, event: KeyboardEvent) {
      if (event.key === 'Backspace' && index > 0 && !this.inputs[index]) {
        const prevInput = document.querySelectorAll<HTMLInputElement>('.verification-input input')[index - 1];
        prevInput.focus();
      }
    }
  
    checkIfComplete() {
      if (this.inputs.every(input => input !== '')) {
        
        this.verifypassword(this.inputs.join(''))
        ///
      }
    }

    verifypassword(code:string){
      this._ForgetPasswordService.verifyPassword(code).subscribe({
        next:(res)=>{
          this._ToastrService.success('' , 'fresh cart',{closeButton:true, progressBar:true})
          this._Router.navigate([`resetPassword/resetPasswordPage`])
          this._ForgetPasswordService.stateRestPage.next(true)
          console.log(res);
          
        }
      })
    }
  
    
  }
   
   
  
