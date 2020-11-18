/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathProcessFlowSelectComponent } from './smsMainApiPathProcessFlowSelect.component';

describe('SmsMainApiPathProcessFlowSelectComponent', () => {
  let component: SmsMainApiPathProcessFlowSelectComponent;
  let fixture: ComponentFixture<SmsMainApiPathProcessFlowSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathProcessFlowSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathProcessFlowSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
