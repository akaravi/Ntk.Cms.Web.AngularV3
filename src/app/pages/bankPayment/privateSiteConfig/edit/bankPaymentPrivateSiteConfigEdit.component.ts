import {
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CmsToastrService } from 'src/app/core/services/base/cmsToastr.service';
import {
    BankPaymentPrivateSiteConfigModel, BankPaymentPrivateSiteConfigService, CoreEnumService, EnumModel,
    ErrorExcptionResult, FormInfoModel
} from 'ntk-cms-api';


@Component({
    selector: 'app-bank-payment-private-site-config-edit',
    templateUrl: './bankPaymentPrivateSiteConfigEdit.component.html',
    styleUrls: ['./bankPaymentPrivateSiteConfigEdit.component.scss'],
})
export class BankPaymentPrivateSiteConfigEditComponent implements OnInit {
    @ViewChild('vform', { static: false })
    formGroup: FormGroup;

    formInfo: FormInfoModel = new FormInfoModel();
    dataModel: BankPaymentPrivateSiteConfigModel = new BankPaymentPrivateSiteConfigModel();
    dataModelResult: ErrorExcptionResult<BankPaymentPrivateSiteConfigModel> = new ErrorExcptionResult<BankPaymentPrivateSiteConfigModel>();
    id = 0;

    dataModelEnumRecordStatusResult: ErrorExcptionResult<EnumModel> = new ErrorExcptionResult<EnumModel>();


    @Input()
    set options(model: any) {
        this.dateModleInput = model;
    }

    get options(): any {
        return this.dateModleInput;
    }

    loadingStatus = false; // add one more property
    private dateModleInput: any;

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private activatedRoute: ActivatedRoute,
        public bankPaymentPrivateSiteConfigService: BankPaymentPrivateSiteConfigService,
        public coreEnumService: CoreEnumService,
        private toastrService: CmsToastrService,

    ) {
    }


    ngOnInit() {
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.activatedRoute.queryParams.subscribe((params) => {
            this.id = +params['id'] || 0;
        });
        if (this.dateModleInput && this.dateModleInput.id) {
            this.id = this.dateModleInput.id;
        }
        this.DataGetOneContent();
        this.getEnumRecordStatus();
    }

    getEnumRecordStatus(): void {
        this.coreEnumService.ServiceEnumRecordStatus().subscribe((res) => {
            this.dataModelEnumRecordStatusResult = res;
        });
    }

    onFormSubmit() {
        if (this.formGroup.valid) {
            this.formInfo.FormAllowSubmit = false;
            this.DataEditContent();
        }
    }

    onFormCancel() {
        this.formGroup.reset();
        this.DataGetOneContent();
    }

    DataGetOneContent() {
        if (this.id <= 0) {
            const title = 'برروز خطا ';
            const message = 'ردیف اطلاعات جهت ویرایش مشخص نیست';
            this.toastrService.toastr.error(message, title);
            return;
        }

        this.formInfo.FormAlert = 'در دریافت ارسال اطلاعات از سرور';
        this.formInfo.FormError = '';
        this.loadingStatus = true;
        this.bankPaymentPrivateSiteConfigService.ServiceGetOneById(this.id).subscribe(
            (next) => {
                this.dataModel = next.Item;

                if (next.IsSuccess) {
                    this.dataModel = next.Item;
                    this.formInfo.FormAlert = '';
                } else {
                    const title = 'برروز خطا ';
                    const message = next.ErrorMessage;
                    this.toastrService.toastr.error(message, title);
                }
                this.loadingStatus = false;
            },
            (error) => {
                this.toastrService.typeError(error);
                this.loadingStatus = false;
            }
        );
    }

    DataEditContent() {
        if (this.id <= 0) {
            const title = 'برروز خطا ';
            const message = 'ردیف اطلاعات جهت ویرایش مشخص نیست';
            this.toastrService.toastr.error(message, title);
            return;
        }

        this.formInfo.FormAlert = 'در حال ارسال اطلاعات به سرور';
        this.formInfo.FormError = '';
        this.loadingStatus = true;
        this.bankPaymentPrivateSiteConfigService.ServiceEdit(this.dataModel).subscribe(
            (next) => {
                this.formInfo.FormAllowSubmit = true;
                this.dataModelResult = next;
                if (next.IsSuccess) {
                    this.formInfo.FormAlert = 'ثبت با موفقت انجام شد';
                } else {
                    const title = 'برروز خطا ';
                    const message = next.ErrorMessage;
                    this.toastrService.toastr.error(message, title);
                }
                this.loadingStatus = false;
            },
            (error) => {
                this.formInfo.FormAllowSubmit = true;

                this.toastrService.typeError(error);
                this.loadingStatus = false;
            }
        );
    }

    setFocus($event) {
        $event.focus();

    }
}
