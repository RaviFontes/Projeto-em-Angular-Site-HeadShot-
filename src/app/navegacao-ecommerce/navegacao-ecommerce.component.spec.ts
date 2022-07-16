import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacaoEcommerceComponent } from './navegacao-ecommerce.component';

describe('NavegacaoEcommerceComponent', () => {
  let component: NavegacaoEcommerceComponent;
  let fixture: ComponentFixture<NavegacaoEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacaoEcommerceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacaoEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
