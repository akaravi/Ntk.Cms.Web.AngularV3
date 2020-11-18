/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BankPaymentPrivateSiteConfigAddComponent } from './bankPaymentPrivateSiteConfigAdd.component';

describe('BankPaymentPrivateSiteConfigAddComponent', () => {
  let component: BankPaymentPrivateSiteConfigAddComponent;
  let fixture: ComponentFixture<BankPaymentPrivateSiteConfigAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPaymentPrivateSiteConfigAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPaymentPrivateSiteConfigAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
