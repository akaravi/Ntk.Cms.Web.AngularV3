import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CaptchaModel, CoreAuthService } from 'ntk-cms-api';
import { environment } from 'src/environments/environment';
import { CmsToastrService } from 'src/app/core/services/base/cmsToastr.service';


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
  cmsUiConfig = environment.cmsUiConfig;
  returnUrl: any = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coreAuthService: CoreAuthService,
    private toastrService: CmsToastrService,
  ) { }

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
            if (this.returnUrl === null || this.returnUrl === undefined) {
              this.returnUrl = environment.cmsUiConfig.Pathlogin;
            }
            this.router.navigate([this.returnUrl]);
          }
        },
        (error) => {
          this.toastrService.typeError(error);
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
          this.toastrService.typeError(error);

        }
      )
    );
  }
}
