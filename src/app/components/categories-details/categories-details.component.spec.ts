import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDetailsComponent } from './categories-details.component';

describe('CategoriesDetailsComponent', () => {
  let component: CategoriesDetailsComponent;
  let fixture: ComponentFixture<CategoriesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
