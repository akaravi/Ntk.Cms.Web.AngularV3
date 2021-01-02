import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    BankPaymentPrivateSiteConfigModel, BankPaymentPrivateSiteConfigService,
    CoreEnumService, EnumModel, ErrorExceptionResult, FormInfoModel
} from 'ntk-cms-api';
import { CmsToastrService } from 'src/app/core/services/base/cmsToastr.service';



@Component({
    selector: 'app-bank-payment-private-site-config-add',
    templateUrl: './bankPaymentPrivateSiteConfigAdd.component.html',
    styleUrls: ['./bankPaymentPrivateSiteConfigAdd.component.scss'],
})
export class BankPaymentPrivateSiteConfigAddComponent implements OnInit {

    @ViewChild('vform', { static: false }) formGroup: FormGroup;

    dataModelEnumRecordStatusResult: ErrorExceptionResult<EnumModel> = new ErrorExceptionResult<EnumModel>();
    loadingStatus = false; // add one more property
    private dateModleInput: any;
    dataModelResult: ErrorExceptionResult<BankPaymentPrivateSiteConfigModel> = new ErrorExceptionResult<BankPaymentPrivateSiteConfigModel>();
    dataModel: BankPaymentPrivateSiteConfigModel = new BankPaymentPrivateSiteConfigModel();
    formInfo: FormInfoModel = new FormInfoModel();


    constructor(
        public coreEnumService: CoreEnumService,
        private toastrService: CmsToastrService,
        public bankPaymentPrivateSiteConfigService: BankPaymentPrivateSiteConfigService
    ) {
    }

    ngOnInit() {
        this.getEnumRecordStatus();
    }

    getEnumRecordStatus(): void {
        this.coreEnumService.ServiceEnumRecordStatus().subscribe((res) => {
            this.dataModelEnumRecordStatusResult = res;
        });
    }

    @Input()
    set options(model: any) {
        this.dateModleInput = model;
    }

    get options(): any {
        return this.dateModleInput;
    }

    DataAddContent() {
        this.formInfo.FormAlert = 'در حال ارسال اطلاعات به سرور';
        this.formInfo.FormError = '';
        this.loadingStatus = true;
        this.bankPaymentPrivateSiteConfigService.ServiceAdd(this.dataModel).subscribe(
            (next) => {
                this.formInfo.FormAllowSubmit = !next.IsSuccess;
                this.dataModelResult = next;
                if (next.IsSuccess) {
                    this.formInfo.FormAlert = 'ثبت با موفقت انجام شد';
                } else {
                    this.formInfo.FormAlert = 'برروز خطا';
                    this.formInfo.FormError = next.ErrorMessage;
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

    onFormSubmit() {
        if (this.formGroup.valid) {
            this.formInfo.FormAllowSubmit = false;
            this.DataAddContent();
        }
    }

    onFormCancel() {
        this.formGroup.reset();
    }
}
