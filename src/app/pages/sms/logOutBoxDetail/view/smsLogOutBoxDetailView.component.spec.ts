/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsLogOutBoxDetailViewComponent } from './smsLogOutBoxDetailView.component';

describe('SmsLogOutBoxDetailViewComponent', () => {
  let component: SmsLogOutBoxDetailViewComponent;
  let fixture: ComponentFixture<SmsLogOutBoxDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsLogOutBoxDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsLogOutBoxDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
