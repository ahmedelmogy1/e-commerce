import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Ibrands } from '../../core/interface/ibrands';
import { BrandsService } from '../../core/services/brands.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
})
export class BrandsComponent implements OnInit,OnDestroy {
  private readonly _BrandsService = inject(BrandsService);
  barnds!:Ibrands[];
  brand!: Subscription;
  ngOnInit(): void {
    this.brand = this._BrandsService.getAllBrands().subscribe({
      next: (data) => {
        this.barnds = data.data;
      },
    });
  }
  ngOnDestroy(): void {
    this.brand.unsubscribe()
  }
}
