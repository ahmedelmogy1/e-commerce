import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Iproducts } from '../../core/interface/iproducts';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../core/services/categories.service';
import { ICategories } from '../../core/interface/icategories';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../core/services/cart.service';
import { WishService } from '../../core/services/wish.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private _ProductsService: ProductsService,
    private _CategoriesService: CategoriesService
  ) {}
  private readonly _ToastrService = inject(ToastrService)
  private readonly _CartService = inject(CartService)
  private readonly _WishService  =  inject(WishService)

  curoserCategories: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    navSpeed: 700,
    autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 6,
      },
    },
    nav: true,
  };

  curoserMain: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    navSpeed: 700,
    autoplayHoverPause: true,
    navText: ['', ''],
    items: 1,
    nav: false,
  };

  homeSub!: Subscription;
  categoriesSub!: Subscription;
  products!: Iproducts[];
  categories!: ICategories[];
  ngOnInit(): void {
    this.homeSub = this._ProductsService.getAllProducts().subscribe({
      next: (res) => {
        this.products = res.data.slice(0, 20);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.categoriesSub = this._CategoriesService.getAllCaregories().subscribe({
      next: (res) => {
        console.log(res.data);
        this.categories = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });


    this._CartService.getLoggedUserCart().subscribe({
      next:(res)=>{
        this._CartService.cartOwnerId=res.data.cartOwner
        console.log(res.data.cartOwner);
        console.log(this._CartService.cartOwnerId);
        
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

  addProductToWishList(pId:string){
    this._WishService.addProductToWishlist(pId).subscribe({
      next:(res)=>{
        this._ToastrService.success(res.message , 'fresh cart',{closeButton:true, progressBar:true})

      },
    })
  }

  

  ngOnDestroy(): void {
    if (this.homeSub) this.homeSub.unsubscribe();
    if (this.categoriesSub) this.categoriesSub.unsubscribe();
  }
}
