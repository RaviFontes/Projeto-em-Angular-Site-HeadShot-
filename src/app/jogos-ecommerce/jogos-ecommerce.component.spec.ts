import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosEcommerceComponent } from './jogos-ecommerce.component';

describe('JogosEcommerceComponent', () => {
  let component: JogosEcommerceComponent;
  let fixture: ComponentFixture<JogosEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogosEcommerceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogosEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
