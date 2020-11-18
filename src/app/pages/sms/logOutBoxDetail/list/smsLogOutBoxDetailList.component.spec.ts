/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsLogOutBoxDetailListComponent } from './smsLogOutBoxDetailList.component';

describe('SmsLogOutBoxDetailListComponent', () => {
  let component: SmsLogOutBoxDetailListComponent;
  let fixture: ComponentFixture<SmsLogOutBoxDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsLogOutBoxDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsLogOutBoxDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
