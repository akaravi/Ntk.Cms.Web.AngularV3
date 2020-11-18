/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathPrivateSiteConfigEditComponent } from './smsMainApiPathPrivateSiteConfigEdit.component';

describe('SmsMainApiPathPrivateSiteConfigEditComponent', () => {
  let component: SmsMainApiPathPrivateSiteConfigEditComponent;
  let fixture: ComponentFixture<SmsMainApiPathPrivateSiteConfigEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathPrivateSiteConfigEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathPrivateSiteConfigEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
