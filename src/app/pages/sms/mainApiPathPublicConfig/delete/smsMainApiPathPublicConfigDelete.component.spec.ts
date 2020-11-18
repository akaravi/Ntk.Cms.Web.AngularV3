/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathPublicConfigDeleteComponent } from './smsMainApiPathPublicConfigDelete.component';

describe('SmsMainApiPathPublicConfigDeleteComponent', () => {
  let component: SmsMainApiPathPublicConfigDeleteComponent;
  let fixture: ComponentFixture<SmsMainApiPathPublicConfigDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathPublicConfigDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathPublicConfigDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
