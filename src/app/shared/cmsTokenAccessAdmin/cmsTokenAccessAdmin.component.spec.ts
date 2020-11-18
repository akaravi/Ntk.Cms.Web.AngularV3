/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CmsTokenAccessAdminComponent } from './cmsTokenAccessAdmin.component';

describe('CmsTokenAccessAdminComponent', () => {
  let component: CmsTokenAccessAdminComponent;
  let fixture: ComponentFixture<CmsTokenAccessAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsTokenAccessAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsTokenAccessAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
