/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathSuperSederListComponent } from './smsMainApiPathSuperSederList.component';

describe('SmsMainApiPathSuperSederListComponent', () => {
  let component: SmsMainApiPathSuperSederListComponent;
  let fixture: ComponentFixture<SmsMainApiPathSuperSederListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathSuperSederListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathSuperSederListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
