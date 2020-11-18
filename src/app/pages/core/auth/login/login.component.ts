import { environment } from 'src/environments/environment';
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';

import {
  AuthUserSignInModel,
  CaptchaModel,
  CoreAuthService,
} from 'ntk-cms-api';
import { CmsToastrService } from 'src/app/core/services/base/cmsToastr.service';

@Component({
  selector: 'app-cms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) loginForm: NgForm;
  subManager = new Subscription();
  model: AuthUserSignInModel = new AuthUserSignInModel();
  returnUrl: any = '';
  captchaModel: CaptchaModel = new CaptchaModel();
  source = interval(1000 * 60 * 5);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coreAuthService: CoreAuthService,
    private toastrService: CmsToastrService,
  ) {}
  ngOnInit() {
    this.model.IsRemember = false;
    this.model.Email = '';

    this.subManager.add(
      this.route.queryParams.subscribe(
        (params) => (this.returnUrl = params.return)
      )
    );
    this.onCaptchaOrder();
    this.subManager = this.source.subscribe(() => this.onCaptchaOrder());
  }
  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

  onSubmit() {
    this.model.CaptchaKey = this.captchaModel.Key;
    this.subManager.add(
      this.coreAuthService.ServiceSigninUser(this.model).subscribe(
        (next) => {
          if (next.IsSuccess) {
            if (this.returnUrl === null || this.returnUrl === undefined) {
              this.returnUrl = environment.cmsUiConfig.PathSelectSite;
            }
            this.router.navigate([this.returnUrl]);
          } else {
            this.onCaptchaOrder();
          }
        },
        (error) => {
          this.onCaptchaOrder();
          this.toastrService.typeError(error);

        }
      )
    );
  }
  onCaptchaOrder() {
    this.model.CaptchaText = '';
    this.subManager.add(
      this.coreAuthService.ServiceCaptcha().subscribe(
        (next) => {
          this.captchaModel = next.Item;
        },
        (error) => {
          this.toastrService.typeError(error);

        }
      )
    );
  }
}
