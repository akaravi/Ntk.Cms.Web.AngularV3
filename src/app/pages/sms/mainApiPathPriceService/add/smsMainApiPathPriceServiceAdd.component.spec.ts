/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathPriceServiceAddComponent } from './smsMainApiPathPriceServiceAdd.component';

describe('SmsMainApiPathPriceServiceAddComponent', () => {
  let component: SmsMainApiPathPriceServiceAddComponent;
  let fixture: ComponentFixture<SmsMainApiPathPriceServiceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathPriceServiceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathPriceServiceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
