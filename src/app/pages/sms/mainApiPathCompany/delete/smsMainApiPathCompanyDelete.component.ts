import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CmsToastrService } from 'src/app/core/services/base/cmsToastr.service';

import { ToastrService } from 'ngx-toastr';
import { FormInfoModel, SmsMainApiPathCompanyService } from 'ntk-cms-api';

@Component({
  selector: 'app-sms-main-api-path-company-delete',
  templateUrl: './smsMainApiPathCompanyDelete.component.html',
  styleUrls: ['./smsMainApiPathCompanyDelete.component.scss'],
})
export class SmsMainApiPathCompanyDeleteComponent implements OnInit {
  @Input()
  set options(model: any) {
    this.dateModleInput = model;
  }
  get options(): any {
    return this.dateModleInput;
  }
  id: any;

  private dateModleInput: any;
  @ViewChild('vform', { static: false })
  formGroup: FormGroup;

  formInfo: FormInfoModel = new FormInfoModel();
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: SmsMainApiPathCompanyService,
    private toastrService: CmsToastrService,
    
  ) { }

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.activatedRoute.queryParams.subscribe((params) => {
      // Defaults to 0 if no query param provided.
      this.id = +params['id'] || 0;
    });
    if (this.dateModleInput && this.dateModleInput.id) {
      this.id = this.dateModleInput.id;
    }
    if (!this.id || this.id === 0) {
      this.formInfo.FormAlert = 'برروز خطا';
      this.formInfo.FormError = 'شناسه دسته بندی مشخص نمی باشد';
      this.formInfo.DisabledButtonSubmitted = true;
      return;
    }
  }
}
