/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BankPaymentPublicConfigDeleteComponent } from './bankPaymentPublicConfigDelete.component';

describe('BankPaymentPublicConfigDeleteComponent', () => {
  let component: BankPaymentPublicConfigDeleteComponent;
  let fixture: ComponentFixture<BankPaymentPublicConfigDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPaymentPublicConfigDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPaymentPublicConfigDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
