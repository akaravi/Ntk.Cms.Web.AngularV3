/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathPermissionEditComponent } from './smsMainApiPathPermissionEdit.component';

describe('SmsMainApiPathPermissionEditComponent', () => {
  let component: SmsMainApiPathPermissionEditComponent;
  let fixture: ComponentFixture<SmsMainApiPathPermissionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathPermissionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathPermissionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
