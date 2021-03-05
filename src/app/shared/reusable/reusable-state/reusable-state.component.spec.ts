import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableStateComponent } from './reusable-state.component';

describe('ReusableStateComponent', () => {
  let component: ReusableStateComponent;
  let fixture: ComponentFixture<ReusableStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
