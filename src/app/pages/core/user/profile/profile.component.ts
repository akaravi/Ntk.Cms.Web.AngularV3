import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import {
    AuthUserChangePasswordModel,
    CoreAuthService,
    CoreUserModel,
    CoreUserService,
} from 'ntk-cms-api';
import {AccessModel} from 'ntk-cms-api/lib/models/entity/base/accessModel';
import { CmsToastrService } from 'src/app/core/services/base/cmsToastr.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class CoreUserProfileComponent implements OnInit {
    @ViewChild('f', {static: false}) CoreUserEditForm: NgForm;
    CorrectUserInfo: CoreUserModel = new CoreUserModel();
    // CoreUserEditFormGroup: FormGroup;

    CoreUserPasswordEditformGroup: FormGroup;
    onSubmitCoreUserPasswordEditRun = false;
    // Variable Declaration
    currentPage = 'About';
    modelDataAccess: AccessModel;

    constructor(
        private coreUserService: CoreUserService,
        private toastrService: CmsToastrService,
        private coreAuthService: CoreAuthService
    ) {
    }

    ngOnInit() {
        // this.CoreUserEditformGroup = new FormGroup({
        //   Name: new FormControl(),
        //   LastName: new FormControl(),
        //   BirthDay: new FormControl(),
        //   Gender: new FormControl(),
        //   FullName: new FormControl(),
        //   Address: new FormControl(),
        //   PostalCode: new FormControl(),
        //   FirewallAllowIP: new FormControl(),
        // });
        this.getDataCurrentUser();
        this.getDataAccess();
        this.CoreUserPasswordEditformGroup = new FormGroup(
            {
                OldPassword: new FormControl('', Validators.required),
                NewPassword: new FormControl('', Validators.required),
                NewPasswordConfirm: new FormControl('', Validators.required),
            },
            this.passwordMatchValidator
        );

    }

    getDataCurrentUser(): void {
        this.coreUserService.ServiceCurrectUser().subscribe(
            (next) => {
                this.CorrectUserInfo = next.Item;
                this.coreUserService.SetCorrectUser(this.CorrectUserInfo);
            },
            (error) => {
                this.toastrService.typeError(error);
            }
        );
    }

    getDataAccess(): void {
        this.coreUserService.ServiceViewModel().subscribe(
            (next) => {
                this.modelDataAccess = next.Access;
            },
            (error) => {
                this.toastrService.typeError(error);
            }
        );
    }

    passwordMatchValidator(g: FormGroup) {
        return g.get('NewPassword').value === g.get('NewPasswordConfirm').value
            ? null
            : {mismath: true};
    }

    showPage(page: string) {
        this.currentPage = page;
    }

    onSubmitCoreUserPasswordEdit() {
        const model: AuthUserChangePasswordModel = new AuthUserChangePasswordModel();
        if (!this.CoreUserPasswordEditformGroup.valid) {
            return;
        }
        model.OldPassword = this.CoreUserPasswordEditformGroup.get(
            'OldPassword'
        ).value;
        model.NewPassword = this.CoreUserPasswordEditformGroup.get(
            'NewPassword'
        ).value;
        this.coreAuthService.ServiceChangePassword(model).subscribe(
            (next) => {
                if (next.IsSuccess) {
                    this.onSubmitCoreUserPasswordEditRun = true;
                }
            },
            (error) => {
                this.toastrService.typeError(error);
            }
        );
    }

    onSubmitCoreUserEdit() {
        // if (!this.CoreUserEditformGroup.valid) {
        //   return;
        // }

        this.coreUserService.ServiceEdit(this.CorrectUserInfo).subscribe(
            (next) => {
                if (next.IsSuccess) {
                    this.toastrService.toastr.success(
                        'اطلاعات شما با موفقیت ثبت گردید',
                        ' ثبت تغییرات'
                    );
                    this.CorrectUserInfo = next.Item;
                    this.coreUserService.SetCorrectUser(this.CorrectUserInfo);
                }
            },
            (error) => {
                this.toastrService.typeError(error);
            }
        );
    }
}
