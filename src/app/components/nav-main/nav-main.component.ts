import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-main',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-main.component.html',
  styleUrl: './nav-main.component.css'
})
export class NavMainComponent  implements OnInit,OnDestroy{
private readonly _CartService = inject(CartService)
  constructor(private _Router:Router){

  }
  supId!:Subscription
  countOfCart!:number
ngOnInit(): void {
  this.supId=this._CartService.countOfCart.subscribe({
    next:(res)=>{
       this.countOfCart=res
    }
  })

  this._CartService.getLoggedUserCart().subscribe({
    next:(res)=>{
      this.countOfCart=res.numOfCartItems
    }
  })
}


  logout(){
    sessionStorage.removeItem('token')
    this._Router.navigate(['/login'])
  }


  ngOnDestroy(): void {
    this.supId.unsubscribe
  }

  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  profileSettings() {
    console.log('Profile settings clicked');
  }

  logOut() {
    console.log('Logged out');
  }
}
