import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinrsoComponent } from './joinrso.component';

describe('JoinrsoComponent', () => {
  let component: JoinrsoComponent;
  let fixture: ComponentFixture<JoinrsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinrsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinrsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
