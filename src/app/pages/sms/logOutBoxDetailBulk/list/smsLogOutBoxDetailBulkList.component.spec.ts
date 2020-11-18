/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsLogOutBoxDetailBulkListComponent } from './smsLogOutBoxDetailBulkList.component';

describe('SmsLogOutBoxDetailBulkListComponent', () => {
  let component: SmsLogOutBoxDetailBulkListComponent;
  let fixture: ComponentFixture<SmsLogOutBoxDetailBulkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsLogOutBoxDetailBulkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsLogOutBoxDetailBulkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
