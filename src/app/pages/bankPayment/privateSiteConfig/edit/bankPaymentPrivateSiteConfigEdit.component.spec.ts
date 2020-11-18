/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BankPaymentPrivateSiteConfigEditComponent } from './bankPaymentPrivateSiteConfigEdit.component';

describe('BankPaymentPrivateSiteConfigEditComponent', () => {
  let component: BankPaymentPrivateSiteConfigEditComponent;
  let fixture: ComponentFixture<BankPaymentPrivateSiteConfigEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPaymentPrivateSiteConfigEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPaymentPrivateSiteConfigEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
