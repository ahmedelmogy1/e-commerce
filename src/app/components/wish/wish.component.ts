import { Component, inject, OnInit } from '@angular/core';
import { WishService } from '../../core/services/wish.service';
import { ToastrService } from 'ngx-toastr';
import { Iproducts } from '../../core/interface/iproducts';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent implements OnInit {
  
  private readonly _WishService =inject(WishService) 
  private readonly _ToastrService =inject(ToastrService) 
  private readonly _ProductsService =inject(ProductsService) 
  private readonly _CartService =inject(CartService) 
  products!: Iproducts[];



ngOnInit(): void {
  this._WishService.getLoggedUserWish().subscribe({
    next:(res)=>{
      this.products= res.data
    }
  })
}   



addProductToCart(idP: string) {
  this._ProductsService.addProductToCart(idP).subscribe({
    next: (res) => {
      this._ToastrService.success(res.message , 'fresh cart',{closeButton:true, progressBar:true})
      this._CartService.countOfCart.next(res.numOfCartItems)

      
    },
    error:(err)=>{
      this._ToastrService.warning(err.message , 'fresh cart',{closeButton:true, progressBar:true})

      
    }
  });
}

removerProductFromWishlist(idP: string){
  this._WishService.removerProductFromWishlist(idP).subscribe({
    next:(res)=>{
      this._ToastrService.success(res.message , 'fresh cart',{closeButton:true, progressBar:true})
      this._WishService.getLoggedUserWish().subscribe({
        next:(res)=>{
          this.products= res.data
        }
      })
      
    },
  })
}






}


