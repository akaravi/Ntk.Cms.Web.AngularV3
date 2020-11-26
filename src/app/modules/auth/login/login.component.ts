import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription, Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {UserModel} from '../_models/user.model';
import {AuthService} from '../_services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthUserSignInModel, CaptchaModel, CoreAuthService} from 'ntk-cms-api';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

    model: AuthUserSignInModel = new AuthUserSignInModel();
    captchaModel: CaptchaModel = new CaptchaModel();


    // KeenThemes mock, change it to:
    // defaultAuth = {
    //   email: '',
    //   password: '',
    // };
    defaultAuth: any = {
        email: 'admin@demo.com',
        password: 'demo',
    };
    loginForm: FormGroup;
    hasError: boolean;
    returnUrl: string;
    isLoading$: Observable<boolean>;

    // private fields
    private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router,
        private coreAuthService: CoreAuthService
    ) {
        this.isLoading$ = this.authService.isLoading$;
        // redirect to home if already logged in
        // if (this.authService.currentUserValue) {
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit(): void {
        this.onCaptchaOrder();
        this.initForm();
        // get return url from route parameters or default to '/'
        this.returnUrl =
            this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }

    initForm() {
        this.loginForm = this.fb.group({
            captchaText: null,
            email: [
                this.defaultAuth.email,
                Validators.compose([
                    Validators.required,
                    Validators.email,
                    Validators.minLength(3),
                    Validators.maxLength(320),
                    // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
                ]),
            ],
            password: [
                this.defaultAuth.password,
                Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(100),
                ]),
            ],
        });
    }

    submit() {
        this.hasError = false;
        this.model.CaptchaKey = this.captchaModel.Key;
        this.coreAuthService.ServiceSigninUser(this.model).subscribe((res) => {
            if (res.IsSuccess) {
                localStorage.setItem('userToken', res.Item.Token);
                this.authService
                    .login('admin@demo.com', 'demo')
                    .pipe(first())
                    .subscribe((user: UserModel) => {
                        if (user) {
                            this.router.navigate([this.returnUrl]);
                        } else {
                            this.hasError = true;
                        }
                    });
            } else {
                this.onCaptchaOrder();
            }
        });
    }

    onCaptchaOrder(): void {
        this.model.CaptchaText = '';
        this.coreAuthService.ServiceCaptcha().subscribe(
            (next) => {
                this.captchaModel = next.Item;
            }
        );
    }

    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
}
