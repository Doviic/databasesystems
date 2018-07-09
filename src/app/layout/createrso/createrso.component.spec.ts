import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatersoComponent } from './createrso.component';

describe('CreatersoComponent', () => {
  let component: CreatersoComponent;
  let fixture: ComponentFixture<CreatersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
