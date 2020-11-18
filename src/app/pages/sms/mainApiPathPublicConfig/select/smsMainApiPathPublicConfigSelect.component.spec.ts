/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathPublicConfigSelectComponent } from './smsMainApiPathPublicConfigSelect.component';

describe('SmsMainApiPathPublicConfigSelectComponent', () => {
  let component: SmsMainApiPathPublicConfigSelectComponent;
  let fixture: ComponentFixture<SmsMainApiPathPublicConfigSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathPublicConfigSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathPublicConfigSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
