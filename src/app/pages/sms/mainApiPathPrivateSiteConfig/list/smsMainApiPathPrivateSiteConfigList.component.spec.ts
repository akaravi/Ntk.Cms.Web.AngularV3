/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathPrivateSiteConfigListComponent } from './smsMainApiPathPrivateSiteConfigList.component';

describe('SmsMainApiPathPrivateSiteConfigListComponent', () => {
  let component: SmsMainApiPathPrivateSiteConfigListComponent;
  let fixture: ComponentFixture<SmsMainApiPathPrivateSiteConfigListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathPrivateSiteConfigListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathPrivateSiteConfigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
