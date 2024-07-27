import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentLedgerSummaryComponent } from './payment-ledger-summary.component';

describe('PaymentLedgerSummaryComponent', () => {
  let component: PaymentLedgerSummaryComponent;
  let fixture: ComponentFixture<PaymentLedgerSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentLedgerSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentLedgerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
