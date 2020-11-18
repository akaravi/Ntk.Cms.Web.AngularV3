/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathCompanyListComponent } from './smsMainApiPathCompanyList.component';

describe('SmsMainApiPathCompanyListComponent', () => {
  let component: SmsMainApiPathCompanyListComponent;
  let fixture: ComponentFixture<SmsMainApiPathCompanyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathCompanyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
