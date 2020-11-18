/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BankPaymentPublicConfigAddComponent } from './bankPaymentPublicConfigAdd.component';

describe('BankPaymentPublicConfigAddComponent', () => {
  let component: BankPaymentPublicConfigAddComponent;
  let fixture: ComponentFixture<BankPaymentPublicConfigAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPaymentPublicConfigAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPaymentPublicConfigAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
