/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathSuperSederDeleteComponent } from './smsMainApiPathSuperSederDelete.component';

describe('SmsMainApiPathSuperSederDeleteComponent', () => {
  let component: SmsMainApiPathSuperSederDeleteComponent;
  let fixture: ComponentFixture<SmsMainApiPathSuperSederDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathSuperSederDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathSuperSederDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
