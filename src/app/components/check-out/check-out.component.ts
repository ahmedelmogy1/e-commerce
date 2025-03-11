import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaymentService } from '../../core/services/payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,FormsModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent implements OnInit{
  private readonly _PaymentService= inject(PaymentService)
  private readonly _ActivatedRoute =inject(ActivatedRoute)
  private readonly _ToastrService =inject(ToastrService)
  private readonly _Router =inject(Router)
  private readonly _CartService =inject(CartService)


  cityI:string=''
  phoneI:string=''
  detailsI:string=''
  selectedOption:string=''
  cartId!:string|null
 
  shippingAddress = new FormGroup({
    details: new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    phone: new FormControl(null,[Validators.required,Validators.maxLength(11),Validators.minLength(11),Validators.pattern(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/ )]),
    city: new FormControl(null,[Validators.required,Validators.minLength(3)])

  });


ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(p)=>{
      this.cartId = p.get('cartId')
    }
  })
}

  onSubmit(){
 if(this.selectedOption==='option1'){
  this._PaymentService.checkoutSession(this.cartId,this.shippingAddress.value).subscribe({
    next:(res)=>{
         console.log(res.session.url);
         window.open(res.session.url,'_self')

    }
  })
 }
 else if (this.selectedOption==='option2'){
  this._PaymentService.cashOrder(this.cartId,this.shippingAddress.value).subscribe({
    next:(res)=>{
         console.log('good');
         console.log(res);
         this._ToastrService.success('' , 'fresh cart',{closeButton:true, progressBar:true})
         this._Router.navigate(['allorders'])
         this._CartService.countOfCart.next(0)
        }
        
    })
  
  }
}}
