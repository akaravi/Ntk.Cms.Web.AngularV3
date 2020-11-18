/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathSuperSederAddComponent } from './smsMainApiPathSuperSederAdd.component';

describe('SmsMainApiPathSuperSederAddComponent', () => {
  let component: SmsMainApiPathSuperSederAddComponent;
  let fixture: ComponentFixture<SmsMainApiPathSuperSederAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathSuperSederAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathSuperSederAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
