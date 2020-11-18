/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathSuperSederSelectComponent } from './smsMainApiPathSuperSederSelect.component';

describe('SmsMainApiPathSuperSederSelectComponent', () => {
  let component: SmsMainApiPathSuperSederSelectComponent;
  let fixture: ComponentFixture<SmsMainApiPathSuperSederSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathSuperSederSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathSuperSederSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
