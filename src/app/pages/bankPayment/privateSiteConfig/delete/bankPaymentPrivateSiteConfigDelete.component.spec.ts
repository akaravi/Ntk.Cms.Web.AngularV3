/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BankPaymentPrivateSiteConfigDeleteComponent } from './bankPaymentPrivateSiteConfigDelete.component';

describe('BankPaymentPrivateSiteConfigDeleteComponent', () => {
  let component: BankPaymentPrivateSiteConfigDeleteComponent;
  let fixture: ComponentFixture<BankPaymentPrivateSiteConfigDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPaymentPrivateSiteConfigDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPaymentPrivateSiteConfigDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
