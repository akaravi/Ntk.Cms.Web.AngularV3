import {
    Component,
    OnInit,
    Input,
    ViewChild,
    ChangeDetectorRef,
} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';


import {FormGroup} from '@angular/forms';
import {
    CoreEnumService,
    EnumModel,
    ErrorExceptionResult,
    FormInfoModel,
    SmsMainApiPathCompanyModel,
    SmsMainApiPathCompanyService,
} from 'ntk-cms-api';
import {CmsToastrService} from 'src/app/core/services/base/cmsToastr.service';

@Component({
    selector: 'app-sms-main-api-path-company-add',
    templateUrl: './smsMainApiPathCompanyAdd.component.html',
    styleUrls: ['./smsMainApiPathCompanyAdd.component.scss'],
})
export class SmsMainApiPathCompanyAddComponent implements OnInit {

    @Input()
    set options(model: any) {
        this.dateModleInput = model;
    }

    get options(): any {
        return this.dateModleInput;
    }

    loadingStatus = false; // add one more property
    private dateModleInput: any;
    dataModelResult: ErrorExceptionResult<SmsMainApiPathCompanyModel> = new ErrorExceptionResult<SmsMainApiPathCompanyModel>();
    dataModel: SmsMainApiPathCompanyModel = new SmsMainApiPathCompanyModel();
    @ViewChild('vform', {static: false}) formGroup: FormGroup;
    dataModelEnumRecordStatusResult: ErrorExceptionResult<EnumModel> = new ErrorExceptionResult<EnumModel>();
    formInfo: FormInfoModel = new FormInfoModel();

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private activatedRoute: ActivatedRoute,
        public coreEnumService: CoreEnumService,
        public smsMainApiPathCompanyService: SmsMainApiPathCompanyService,
        private toastrService: CmsToastrService,

    ) {
        // this.coreEnumService.resultEnumRecordStatusObs.subscribe((vlaue) => {
        //   if (vlaue && vlaue.IsSuccess) {
        //     this.coreEnumService.resultEnumRecordStatus = vlaue;
        //   }
        //   this.coreEnumService.ServiceEnumRecordStatus();
        // });
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

    DataAddContent() {
        this.formInfo.FormAlert = 'در حال ارسال اطلاعات به سرور';
        this.formInfo.FormError = '';
        this.loadingStatus = true;
        this.smsMainApiPathCompanyService.ServiceAdd(this.dataModel).subscribe(
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
