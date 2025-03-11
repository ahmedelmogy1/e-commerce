
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Iproducts } from '../../core/interface/iproducts';
import { SliderComponent } from "../slider/slider.component";
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../core/services/cart.service';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CarouselModule,SliderComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
private readonly _ActivatedRoute =inject(ActivatedRoute)
private readonly _ProductsService=inject(ProductsService)
  private readonly _ToastrService = inject(ToastrService)
private readonly _CartService =inject(CartService)




customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag:true,
  pullDrag: true,
  autoplay:true,
  autoplayTimeout:2000,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
items:1
  
}




pId!:string|null
pDetails!:Iproducts
ngOnInit() {

  this._ActivatedRoute.paramMap.subscribe({
    next:(pInfo)=>{this.pId = pInfo.get('pId')
    }
  })

  this._ProductsService.getProductDetails(this.pId).subscribe({
    next:(pD)=>{
      this.pDetails=pD.data
      console.log(this.pDetails);
      
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
      this._ToastrService.success(err.message , 'fresh cart',{closeButton:true, progressBar:true})

      
    }
  });
}
}
