import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Div2Component } from './div2.component';

describe('Div2Component', () => {
  let component: Div2Component;
  let fixture: ComponentFixture<Div2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Div2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Div2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
