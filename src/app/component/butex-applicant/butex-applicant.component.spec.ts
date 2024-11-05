import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButexApplicantComponent } from './butex-applicant.component';

describe('ButexApplicantComponent', () => {
  let component: ButexApplicantComponent;
  let fixture: ComponentFixture<ButexApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButexApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButexApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
