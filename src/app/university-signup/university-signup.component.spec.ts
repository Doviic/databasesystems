import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitySignupComponent } from './university-signup.component';

describe('UniversitySignupComponent', () => {
  let component: UniversitySignupComponent;
  let fixture: ComponentFixture<UniversitySignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversitySignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitySignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
