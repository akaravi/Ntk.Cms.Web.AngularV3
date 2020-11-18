/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BankPaymentTransactionLogEditComponent } from './bankPaymentTransactionLogEdit.component';

describe('BankPaymentTransactionLogEditComponent', () => {
  let component: BankPaymentTransactionLogEditComponent;
  let fixture: ComponentFixture<BankPaymentTransactionLogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPaymentTransactionLogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPaymentTransactionLogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
