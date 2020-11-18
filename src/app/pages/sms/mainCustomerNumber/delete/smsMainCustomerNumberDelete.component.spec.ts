/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainCustomerNumberDeleteComponent } from './smsMainCustomerNumberDelete.component';

describe('SmsMainCustomerNumberDeleteComponent', () => {
  let component: SmsMainCustomerNumberDeleteComponent;
  let fixture: ComponentFixture<SmsMainCustomerNumberDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainCustomerNumberDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainCustomerNumberDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
