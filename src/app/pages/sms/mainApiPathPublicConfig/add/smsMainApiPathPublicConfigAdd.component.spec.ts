/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathPublicConfigAddComponent } from './smsMainApiPathPublicConfigAdd.component';

describe('SmsMainApiPathPublicConfigAddComponent', () => {
  let component: SmsMainApiPathPublicConfigAddComponent;
  let fixture: ComponentFixture<SmsMainApiPathPublicConfigAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathPublicConfigAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathPublicConfigAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
