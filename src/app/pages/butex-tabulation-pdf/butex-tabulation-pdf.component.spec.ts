import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButexTabulationPDFComponent } from './butex-tabulation-pdf.component';

describe('ButexTabulationPDFComponent', () => {
  let component: ButexTabulationPDFComponent;
  let fixture: ComponentFixture<ButexTabulationPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButexTabulationPDFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButexTabulationPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
