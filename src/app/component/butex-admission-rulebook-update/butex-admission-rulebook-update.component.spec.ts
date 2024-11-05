import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButexAdmissionRulebookUpdateComponent } from './butex-admission-rulebook-update.component';

describe('ButexAdmissionRulebookUpdateComponent', () => {
  let component: ButexAdmissionRulebookUpdateComponent;
  let fixture: ComponentFixture<ButexAdmissionRulebookUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButexAdmissionRulebookUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButexAdmissionRulebookUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
