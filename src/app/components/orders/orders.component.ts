import { Component, inject, OnInit } from '@angular/core';
import { OrdersService } from '../../core/services/orders.service';
import { CartService } from '../../core/services/cart.service';
import { IOrders } from '../../core/interface/iorders';
import { NgClass } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgClass],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent implements OnInit {
  private readonly _OrdersService = inject(OrdersService);
  private readonly _CartService = inject(CartService);
  cartOwner!: string;
  orders:IOrders[]= []
  iconStatePaid:string[]=[]
  ordersUser!:IOrders[]
  ngOnInit(): void {
    this._CartService.getLoggedUserCart().subscribe({
      next: (res) => {
        this.cartOwner = res;
      },
    });
    this._OrdersService.getUserOrders().subscribe({
      next: (res) => {
        console.log(res);
        this.orders=res
        for(let i = 0 ; i<res.length; i++){this.iconStatePaid.push(res[i].isPaid)}
        console.log(this.iconStatePaid);
        
        return res;

      },
      error:(err)=>{
        console.log(err);
        
      }
    });
  

    // this._OrdersService.getAllOrders().subscribe({
    //   next:(res)=>{console.log(res.data);
    //     this.orders=res.data
        
    //     this.ordersUser=this.orders.filter((v)=>{v.user.email=='ahmedelmogy.pro@gmail.com'?console.log('yes'):console.log('no')})
        
    //     console.log(this.ordersUser);
        
    //     console.log(this._AuthService.email);
    //   }
      
      
    // })
  }
}
