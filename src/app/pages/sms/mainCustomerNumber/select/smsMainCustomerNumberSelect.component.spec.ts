/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainCustomerNumberSelectComponent } from './smsMainCustomerNumberSelect.component';

describe('SmsMainCustomerNumberSelectComponent', () => {
  let component: SmsMainCustomerNumberSelectComponent;
  let fixture: ComponentFixture<SmsMainCustomerNumberSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainCustomerNumberSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainCustomerNumberSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
