/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainCustomerNumberEditComponent } from './smsMainCustomerNumberEdit.component';

describe('SmsMainCustomerNumberEditComponent', () => {
  let component: SmsMainCustomerNumberEditComponent;
  let fixture: ComponentFixture<SmsMainCustomerNumberEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainCustomerNumberEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainCustomerNumberEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
