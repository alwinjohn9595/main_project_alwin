import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminiSignupComponent } from './alumini-signup.component';

describe('AluminiSignupComponent', () => {
  let component: AluminiSignupComponent;
  let fixture: ComponentFixture<AluminiSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AluminiSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminiSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
