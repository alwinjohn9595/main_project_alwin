import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminiLoginComponent } from './alumini-login.component';

describe('AluminiLoginComponent', () => {
  let component: AluminiLoginComponent;
  let fixture: ComponentFixture<AluminiLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AluminiLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminiLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
