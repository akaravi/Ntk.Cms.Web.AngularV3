import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../cmsStore';
import { PublicHelper } from 'app/@cms/cmsCommon/helper/publicHelper';
import { environment } from 'environments/environment';
import { CaptchaModel, CoreAuthService } from 'ntk-cms-api';
import { CmsToastrService } from 'app/@cms/cmsService/base/cmsToastr.service';

@Component({
  selector: 'app-cms-forgot-password',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.scss'],
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) loginForm: NgForm;
  subManager = new Subscription();
  model: any = {};
  captchaModel: CaptchaModel = new CaptchaModel();

  returnUrl: any = '';
  _cmsUiConfig = environment.cmsUiConfig;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coreAuthService: CoreAuthService,
    private toastrService: CmsToastrService,
    private store: Store<fromStore.State>,
    private publicHelper: PublicHelper
  ) {}

  ngOnInit() {
    this.model.isremember = true;
    this.subManager.add(
      this.route.queryParams.subscribe(
        (params) => (this.returnUrl = params.return)
      )
    );
    this.onCaptchaOrder();
  }
  ngOnDestroy() {
    this.subManager.unsubscribe();
  }
  // On submit click, reset form fields
  onSubmit() {
    this.model.captchaKey = this.captchaModel.Key;
    this.subManager.add(
      this.coreAuthService.ServiceForgetPassword(this.model).subscribe(
        (next) => {
          if (next.IsSuccess) {
            this.store.dispatch(new fromStore.InitHub());
            if (this.returnUrl === null || this.returnUrl === undefined) {
              this.returnUrl = environment.cmsUiConfig.Pathlogin;
            }
            this.router.navigate([this.returnUrl]);
          }
        },
        (error) => {
          this.toastrService.toastr.error(
            this.publicHelper.CheckError(error),
            'خطا در بازیابی پسورد'
          );
        }
      )
    );
  }
  onCaptchaOrder() {
    this.subManager.add(
      this.coreAuthService.ServiceCaptcha().subscribe(
        (next) => {
          this.captchaModel = next.Item;
        },
        (error) => {
          this.toastrService.toastr.error(
            this.publicHelper.CheckError(error),
            'خطا در دریافت عکس کپچا'
          );
        }
      )
    );
  }
}
