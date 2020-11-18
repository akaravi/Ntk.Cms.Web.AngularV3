/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainCustomerNumberAddComponent } from './smsMainCustomerNumberAdd.component';

describe('SmsMainCustomerNumberAddComponent', () => {
  let component: SmsMainCustomerNumberAddComponent;
  let fixture: ComponentFixture<SmsMainCustomerNumberAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainCustomerNumberAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainCustomerNumberAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
