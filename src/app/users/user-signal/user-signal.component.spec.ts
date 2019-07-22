import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignalComponent } from './user-signal.component';

describe('UserSignalComponent', () => {
  let component: UserSignalComponent;
  let fixture: ComponentFixture<UserSignalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSignalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
