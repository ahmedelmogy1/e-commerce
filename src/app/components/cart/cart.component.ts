import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { ICart } from '../../core/interface/icart';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink,NgClass],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  private readonly _CartService = inject(CartService);
  private readonly _ToastrService = inject(ToastrService)

  cartData: ICart = {
    status: '',
    numOfCartItems: 0,
    cartId: '',
    data: {
      _id: '',
      cartOwner: '',
      products: [],
      createdAt: '',
      updatedAt: '',
      __v: 0,
      totalCartPrice: 0
    }
  };
  
  cartId!:string|null

  ngOnInit(): void {
    this._CartService.getLoggedUserCart().subscribe({
      next: (res) => {
        this.cartData = res;
        this.cartId=res.cartId
        this._CartService.cartOwnerId=res.data.cartOwner
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteProduct(idP: string) {
    this._CartService.deletsSpacificProduct(idP).subscribe({
      next: (res) => {
        console.log(res.numOfCartItems);
        this.cartData = res;
        this._CartService.countOfCart.next(res.numOfCartItems)
      },
      error:(err)=>{
        console.log(err);

      }
    });
  }
 
  deleteAllProducts(){
    this._CartService.deleteAllProducts().subscribe({
      next:(res)=>{console.log(res);
        this.cartData = {status:'',
            numOfCartItems: 0,
            cartId: '',
            data: {    _id: '',
                cartOwner: '',
                products: [],
                createdAt: '',
                updatedAt: '',
                __v: 0,
                totalCartPrice: 0}}
        this._ToastrService.success('' , 'fresh cart',{closeButton:true, progressBar:true})
        this._CartService.countOfCart=res.numOfCartItems


      },
      error:(err)=> {
        console.log(err);
        this._ToastrService.error(err.message , 'fresh cart',{closeButton:true, progressBar:true})

      },
    })
  }

  changeCountOfProduct(idP:string, count:number){
    this._CartService.changeCountOfProduct(idP,count).subscribe({
      next:(res)=>{console.log(res);
        this.cartData=res
        this._ToastrService.success('' , 'fresh cart',{closeButton:true, progressBar:true})
      },
      
      error:(err)=>{console.log(err);
        this._ToastrService.error(err.message , 'fresh cart',{closeButton:true, progressBar:true})

      }
    })
  }
}
