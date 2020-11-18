import {Component, OnInit, Input, ViewChild, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {PublicHelper} from 'app/@cms/cmsCommon/helper/publicHelper';
import {FormGroup} from '@angular/forms';
import {BankPaymentPrivateSiteConfigModel, BankPaymentPrivateSiteConfigService, CoreEnumService, EnumModel, ErrorExcptionResult, FormInfoModel} from 'ntk-cms-api';
import {CmsToastrService} from 'app/@cms/cmsService/base/cmsToastr.service';


@Component({
    selector: 'app-bank-payment-private-site-config-add',
    templateUrl: './bankPaymentPrivateSiteConfigAdd.component.html',
    styleUrls: ['./bankPaymentPrivateSiteConfigAdd.component.scss'],
})
export class BankPaymentPrivateSiteConfigAddComponent implements OnInit {

    @ViewChild('vform', {static: false}) formGroup: FormGroup;

    dataModelEnumRecordStatusResult: ErrorExcptionResult<EnumModel> = new ErrorExcptionResult<EnumModel>();
    loadingStatus = false; // add one more property
    private dateModleInput: any;
    dataModelResult: ErrorExcptionResult<BankPaymentPrivateSiteConfigModel> = new ErrorExcptionResult<BankPaymentPrivateSiteConfigModel>();
    dataModel: BankPaymentPrivateSiteConfigModel = new BankPaymentPrivateSiteConfigModel();
    formInfo: FormInfoModel = new FormInfoModel();


    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private activatedRoute: ActivatedRoute,
        public coreEnumService: CoreEnumService,
        private toastrService: CmsToastrService,
        private publicHelper: PublicHelper,
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
