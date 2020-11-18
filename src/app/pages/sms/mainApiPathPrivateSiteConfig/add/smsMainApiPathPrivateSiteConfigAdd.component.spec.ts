/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathPrivateSiteConfigAddComponent } from './smsMainApiPathPrivateSiteConfigAdd.component';

describe('SmsMainApiPathPrivateSiteConfigAddComponent', () => {
  let component: SmsMainApiPathPrivateSiteConfigAddComponent;
  let fixture: ComponentFixture<SmsMainApiPathPrivateSiteConfigAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathPrivateSiteConfigAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathPrivateSiteConfigAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
