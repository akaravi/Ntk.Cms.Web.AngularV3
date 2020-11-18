import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PublicHelper } from 'app/@cms/cmsCommon/helper/publicHelper';
import { ActivatedRoute } from '@angular/router';
import { BankPaymentPrivateSiteConfigService, FormInfoModel } from 'ntk-cms-api';
import { CmsToastrService } from 'app/@cms/cmsService/base/cmsToastr.service';

@Component({
  selector: 'app-bank-payment-private-site-config-delete',
  templateUrl: './bankPaymentPrivateSiteConfigDelete.component.html',
  styleUrls: ['./bankPaymentPrivateSiteConfigDelete.component.scss']
})
export class BankPaymentPrivateSiteConfigDeleteComponent implements OnInit {
  id: any;

  private dateModleInput: any;
  @ViewChild('vform', { static: false })
  formGroup: FormGroup;

  formInfo: FormInfoModel = new FormInfoModel();

  @Input()
  set options(model: any) {
    this.dateModleInput = model;
  }
  get options(): any {
    return this.dateModleInput;
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: BankPaymentPrivateSiteConfigService,
    private toastrService: CmsToastrService,
    private publicHelper: PublicHelper,
    private bankPaymentPrivateSiteConfigService: BankPaymentPrivateSiteConfigService
  ) {}

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
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
