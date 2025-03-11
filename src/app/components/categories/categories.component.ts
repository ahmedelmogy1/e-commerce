
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { ICategories } from '../../core/interface/icategories';
import { Observable, Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit,OnDestroy{

private readonly _CategoriesService=inject(CategoriesService)
categoriesData!:ICategories[]
Category!:Subscription
ngOnInit(): void {
  this.Category=this._CategoriesService.getAllCaregories().subscribe({
    next:(data)=>{
      this.categoriesData=data.data
      console.log(data);
      
    }
    ,
    error:()=>{
      console.log('error in service categories');
      
    }

  })
}
ngOnDestroy(): void {
  this.Category.unsubscribe()
}
}
