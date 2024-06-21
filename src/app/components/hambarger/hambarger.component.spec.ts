import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HambargerComponent } from './hambarger.component';

describe('HambargerComponent', () => {
  let component: HambargerComponent;
  let fixture: ComponentFixture<HambargerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HambargerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HambargerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
