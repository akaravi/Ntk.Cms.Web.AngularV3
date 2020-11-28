import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Subscription, Observable} from 'rxjs';
import {AuthService} from '../_services/auth.service';
import {Router} from '@angular/router';
import {ConfirmPasswordValidator} from './confirm-password.validator';
import {first} from 'rxjs/operators';
import {AuthUserSignUpModel, CaptchaModel, CoreAuthService} from 'ntk-cms-api';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit, OnDestroy {
    registrationForm: FormGroup;
    hasError: boolean;
    isLoading$: Observable<boolean>;
    registerModel: AuthUserSignUpModel = new AuthUserSignUpModel();

    captchaModel: CaptchaModel = new CaptchaModel();


    // private fields
    private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private coreAuthService: CoreAuthService
    ) {
        this.isLoading$ = this.authService.isLoading$;
        // redirect to home if already logged in
        if (this.authService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit(): void {
        this.onCaptchaOrder();
        this.initForm();
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.registrationForm.controls;
    }

    initForm() {
        this.registrationForm = this.fb.group(
            {
                firstName: [
                    '',
                    Validators.compose([
                        Validators.required,
                        Validators.minLength(3),
                        Validators.maxLength(100),
                    ]),
                ],
                lastName: [
                    '',
                    Validators.compose([
                        Validators.required,
                        Validators.minLength(3),
                        Validators.maxLength(100),
                    ]),
                ],
                email: [
                    '',
                    Validators.compose([
                        Validators.required,
                        Validators.email,
                        Validators.minLength(3),
                        Validators.maxLength(320),
                        // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
                    ]),
                ],
                password: [
                    '',
                    Validators.compose([
                        Validators.required,
                        Validators.minLength(3),
                        Validators.maxLength(100),
                    ]),
                ],
                cPassword: [
                    '',
                    Validators.compose([
                        Validators.required,
                        Validators.minLength(3),
                        Validators.maxLength(100),
                    ]),
                ],
                captcha: [
                    '',
                    Validators.compose([
                        Validators.required,
                    ]),
                ],
                agree: [false, Validators.compose([Validators.required])],
            },
            {
                validator: ConfirmPasswordValidator.MatchPassword,
            }
        );
    }

    submit() {
        this.hasError = false;
        this.registerModel.CaptchaKey = this.captchaModel.Key;
        const registrationSubscr = this.coreAuthService
            .ServiceSignupUser(this.registerModel)
            .pipe(first())
            .subscribe((res) => {
                if (res.IsSuccess) {
                    this.router.navigate(['/']);
                } else {
                    this.hasError = true;
                }
            });
        this.unsubscribe.push(registrationSubscr);
    }

    onCaptchaOrder(): void {
        this.registerModel.CaptchaText = '';
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
