/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmsMainApiPathProcessFlowLogEditComponent } from './smsMainApiPathProcessFlowLogEdit.component';

describe('SmsMainApiPathProcessFlowLogEditComponent', () => {
  let component: SmsMainApiPathProcessFlowLogEditComponent;
  let fixture: ComponentFixture<SmsMainApiPathProcessFlowLogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsMainApiPathProcessFlowLogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsMainApiPathProcessFlowLogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
