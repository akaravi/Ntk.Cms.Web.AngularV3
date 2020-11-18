/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathProcessFlowEditComponent } from './smsMainApiPathProcessFlowEdit.component';

describe('SmsMainApiPathProcessFlowEditComponent', () => {
  let component: SmsMainApiPathProcessFlowEditComponent;
  let fixture: ComponentFixture<SmsMainApiPathProcessFlowEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathProcessFlowEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathProcessFlowEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
