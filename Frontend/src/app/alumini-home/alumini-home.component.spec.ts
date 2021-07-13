import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminiHomeComponent } from './alumini-home.component';

describe('AluminiHomeComponent', () => {
  let component: AluminiHomeComponent;
  let fixture: ComponentFixture<AluminiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AluminiHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
