/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BankPaymentPrivateSiteConfigListComponent } from './bankPaymentPrivateSiteConfigList.component';

describe('BankPaymentPrivateSiteConfigListComponent', () => {
  let component: BankPaymentPrivateSiteConfigListComponent;
  let fixture: ComponentFixture<BankPaymentPrivateSiteConfigListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPaymentPrivateSiteConfigListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPaymentPrivateSiteConfigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
