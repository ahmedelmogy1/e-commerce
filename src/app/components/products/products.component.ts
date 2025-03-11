import { Component, inject } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Subscription } from 'rxjs';
import { Iproducts } from '../../core/interface/iproducts';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WishService } from '../../core/services/wish.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink,SearchPipe,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  private readonly _ProductsService = inject(ProductsService);
    private readonly _ToastrService = inject(ToastrService)
    private readonly _WishService = inject(WishService)
  

  allProductSub!: Subscription;
  products!: Iproducts[];
dataSearch:string=''
  ngOnInit(): void {
    this.allProductSub = this._ProductsService.getAllProducts().subscribe({
      next: (res) => {

        this.products = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addProductToCart(idP: string) {
    this._ProductsService.addProductToCart(idP).subscribe({
      next: (res) => {
        this._ToastrService.success(res.message , 'fresh cart',{closeButton:true, progressBar:true})
      },
      error:(err)=>{
        this._ToastrService.success(err.message , 'fresh cart',{closeButton:true, progressBar:true})

        
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
    this.allProductSub?.unsubscribe();
  }
}
