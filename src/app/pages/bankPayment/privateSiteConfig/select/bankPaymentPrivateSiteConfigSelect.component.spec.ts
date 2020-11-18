/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BankPaymentPrivateSiteConfigSelectComponent } from './bankPaymentPrivateSiteConfigSelect.component';

describe('BankPaymentPrivateSiteConfigSelectComponent', () => {
  let component: BankPaymentPrivateSiteConfigSelectComponent;
  let fixture: ComponentFixture<BankPaymentPrivateSiteConfigSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPaymentPrivateSiteConfigSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPaymentPrivateSiteConfigSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
