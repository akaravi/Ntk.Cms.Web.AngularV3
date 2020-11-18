/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsLogOutBoxDetailBulkViewComponent } from './smsLogOutBoxDetailBulkView.component';

describe('SmsLogOutBoxDetailBulkViewComponent', () => {
  let component: SmsLogOutBoxDetailBulkViewComponent;
  let fixture: ComponentFixture<SmsLogOutBoxDetailBulkViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsLogOutBoxDetailBulkViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsLogOutBoxDetailBulkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
