import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishComponent } from './wish.component';

describe('WishComponent', () => {
  let component: WishComponent;
  let fixture: ComponentFixture<WishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
