import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestPasswordPageComponent } from './rest-password-page.component';

describe('RestPasswordPageComponent', () => {
  let component: RestPasswordPageComponent;
  let fixture: ComponentFixture<RestPasswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestPasswordPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
