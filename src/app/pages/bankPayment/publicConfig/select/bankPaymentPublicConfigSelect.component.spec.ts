/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BankPaymentPublicConfigSelectComponent } from './bankPaymentPublicConfigSelect.component';

describe('BankPaymentPublicConfigSelectComponent', () => {
  let component: BankPaymentPublicConfigSelectComponent;
  let fixture: ComponentFixture<BankPaymentPublicConfigSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPaymentPublicConfigSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPaymentPublicConfigSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
