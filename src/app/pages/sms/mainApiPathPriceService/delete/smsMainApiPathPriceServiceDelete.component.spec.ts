/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathPriceServiceDeleteComponent } from './smsMainApiPathPriceServiceDelete.component';

describe('SmsMainApiPathPriceServiceDeleteComponent', () => {
  let component: SmsMainApiPathPriceServiceDeleteComponent;
  let fixture: ComponentFixture<SmsMainApiPathPriceServiceDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathPriceServiceDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathPriceServiceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
