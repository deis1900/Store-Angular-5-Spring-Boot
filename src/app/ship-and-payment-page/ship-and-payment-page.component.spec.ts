import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipAndPaymentPageComponent } from './ship-and-payment-page.component';

describe('ShipAndPaymentPageComponent', () => {
  let component: ShipAndPaymentPageComponent;
  let fixture: ComponentFixture<ShipAndPaymentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipAndPaymentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipAndPaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
