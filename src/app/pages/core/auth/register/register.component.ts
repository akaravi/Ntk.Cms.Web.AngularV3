import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../cmsStore';
import { PublicHelper } from 'app/@cms/cmsCommon/helper/publicHelper';
import { environment } from 'environments/environment';
import {
  AuthUserSignUpModel,
  CaptchaModel,
  CoreAuthService,
} from 'ntk-cms-api';
import { CmsToastrService } from 'app/@cms/cmsService/base/cmsToastr.service';

@Component({
  selector: 'app-cms-register-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) registerForm: NgForm;
  subManager = new Subscription();
  model: AuthUserSignUpModel = new AuthUserSignUpModel();
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

  //  On submit click, reset field value
  onSubmit() {
    this.model.CaptchaKey = this.captchaModel.Key;
    this.subManager.add(
      this.coreAuthService.ServiceSignupUser(this.model).subscribe(
        (next) => {
          if (next.IsSuccess) {
            this.store.dispatch(new fromStore.InitHub());
            if (this.returnUrl === null || this.returnUrl === undefined) {
              this.returnUrl = environment.cmsUiConfig.Pathlogin;
            }
            this.toastrService.toastr.info('وارد حساب خود شوید', 'توجه');

            this.router.navigate([this.returnUrl]);
          }
        },
        (error) => {
          this.toastrService.toastr.error(
            this.publicHelper.CheckError(error),
            'خطا در ثبت نام'
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
