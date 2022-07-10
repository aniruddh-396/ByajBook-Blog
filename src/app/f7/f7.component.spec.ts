import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F7Component } from './f7.component';

describe('F7Component', () => {
  let component: F7Component;
  let fixture: ComponentFixture<F7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
