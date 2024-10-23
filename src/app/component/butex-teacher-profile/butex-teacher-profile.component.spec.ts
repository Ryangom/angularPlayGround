import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButexTeacherProfileComponent } from './butex-teacher-profile.component';

describe('ButexTeacherProfileComponent', () => {
  let component: ButexTeacherProfileComponent;
  let fixture: ComponentFixture<ButexTeacherProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButexTeacherProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButexTeacherProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
