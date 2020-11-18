/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathSuperSederEditComponent } from './smsMainApiPathSuperSederEdit.component';

describe('SmsMainApiPathSuperSederEditComponent', () => {
  let component: SmsMainApiPathSuperSederEditComponent;
  let fixture: ComponentFixture<SmsMainApiPathSuperSederEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathSuperSederEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathSuperSederEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
