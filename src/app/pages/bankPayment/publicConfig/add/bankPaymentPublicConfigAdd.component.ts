import {Component, OnInit, Input, ViewChild, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PublicHelper} from 'app/@cms/cmsCommon/helper/publicHelper';
import {FormGroup} from '@angular/forms';
import {CmsToastrService} from 'app/@cms/cmsService/base/cmsToastr.service';
import {BankPaymentPublicConfigModel, BankPaymentPublicConfigService, CoreEnumService, EnumModel, ErrorExcptionResult, FormInfoModel} from 'ntk-cms-api';


@Component({
    selector: 'app-bank-payment-public-config-add',
    templateUrl: './bankPaymentPublicConfigAdd.component.html',
    styleUrls: ['./bankPaymentPublicConfigAdd.component.scss'],
})
export class BankPaymentPublicConfigAddComponent implements OnInit {

    private dateModleInput: any;
    dataModelResult: ErrorExcptionResult<BankPaymentPublicConfigModel> = new ErrorExcptionResult<BankPaymentPublicConfigModel>();
    dataModel: BankPaymentPublicConfigModel = new BankPaymentPublicConfigModel();

    @ViewChild('vform', {static: false}) formGroup: FormGroup;

    formInfo: FormInfoModel = new FormInfoModel();
    dataModelEnumRecordStatusResult: ErrorExcptionResult<EnumModel> = new ErrorExcptionResult<EnumModel>();
    loadingStatus = false; // add one more property

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private activatedRoute: ActivatedRoute,
        public coreEnumService: CoreEnumService,
        private toastrService: CmsToastrService,
        private publicHelper: PublicHelper,
        public bankPaymentPublicConfigService: BankPaymentPublicConfigService
    ) {
    }

    ngOnInit() {
        // this.DataGetAllCoreEnum();
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
        this.bankPaymentPublicConfigService.ServiceAdd(this.dataModel).subscribe(
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
                this.toastrService.toastr.error(
                    this.publicHelper.CheckError(error),
                    'برروی خطا در دریافت اطلاعات'
                );
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
