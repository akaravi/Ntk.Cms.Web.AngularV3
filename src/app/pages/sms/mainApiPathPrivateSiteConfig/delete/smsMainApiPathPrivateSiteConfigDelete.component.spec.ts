/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathPrivateSiteConfigDeleteComponent } from './smsMainApiPathPrivateSiteConfigDelete.component';

describe('SmsMainApiPathPrivateSiteConfigDeleteComponent', () => {
  let component: SmsMainApiPathPrivateSiteConfigDeleteComponent;
  let fixture: ComponentFixture<SmsMainApiPathPrivateSiteConfigDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathPrivateSiteConfigDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathPrivateSiteConfigDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
