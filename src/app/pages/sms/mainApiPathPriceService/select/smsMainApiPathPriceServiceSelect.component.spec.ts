/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathPriceServiceSelectComponent } from './smsMainApiPathPriceServiceSelect.component';

describe('SmsMainApiPathPriceServiceSelectComponent', () => {
  let component: SmsMainApiPathPriceServiceSelectComponent;
  let fixture: ComponentFixture<SmsMainApiPathPriceServiceSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathPriceServiceSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathPriceServiceSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
