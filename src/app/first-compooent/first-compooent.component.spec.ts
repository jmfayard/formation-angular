import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCompooentComponent } from './first-compooent.component';

describe('FirstCompooentComponent', () => {
  let component: FirstCompooentComponent;
  let fixture: ComponentFixture<FirstCompooentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCompooentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCompooentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
