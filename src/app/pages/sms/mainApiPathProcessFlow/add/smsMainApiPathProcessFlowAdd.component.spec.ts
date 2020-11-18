/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathProcessFlowAddComponent } from './smsMainApiPathProcessFlowAdd.component';

describe('SmsMainApiPathProcessFlowAddComponent', () => {
  let component: SmsMainApiPathProcessFlowAddComponent;
  let fixture: ComponentFixture<SmsMainApiPathProcessFlowAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathProcessFlowAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathProcessFlowAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
