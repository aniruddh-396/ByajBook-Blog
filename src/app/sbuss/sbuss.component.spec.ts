import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbussComponent } from './sbuss.component';

describe('SbussComponent', () => {
  let component: SbussComponent;
  let fixture: ComponentFixture<SbussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbussComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
