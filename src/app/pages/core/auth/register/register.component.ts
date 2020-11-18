import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  AuthUserSignUpModel,
  CaptchaModel,
  CoreAuthService,
} from 'ntk-cms-api';
import { environment } from 'src/environments/environment';
import { CmsToastrService } from 'src/app/services/base/cmsToastr.service';


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
  cmsUiConfig = environment.cmsUiConfig;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coreAuthService: CoreAuthService,
    private toastrService: CmsToastrService,

  ) { }
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
            if (this.returnUrl === null || this.returnUrl === undefined) {
              this.returnUrl = environment.cmsUiConfig.Pathlogin;
            }
            this.toastrService.toastr.info('وارد حساب خود شوید', 'توجه');

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
