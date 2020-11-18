/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathPrivateSiteConfigSelectComponent } from './smsMainApiPathPrivateSiteConfigSelect.component';

describe('SmsMainApiPathPrivateSiteConfigSelectComponent', () => {
  let component: SmsMainApiPathPrivateSiteConfigSelectComponent;
  let fixture: ComponentFixture<SmsMainApiPathPrivateSiteConfigSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathPrivateSiteConfigSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathPrivateSiteConfigSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
