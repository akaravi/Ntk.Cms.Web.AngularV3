import {
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {PublicHelper} from 'app/@cms/cmsCommon/helper/publicHelper';
import {CmsToastrService} from 'app/@cms/cmsService/base/cmsToastr.service';
import {
    CoreEnumService,
    EnumModel,
    ErrorExcptionResult,
    FormInfoModel,
    SmsMainApiPathModel,
    SmsMainApiPathService,
} from 'ntk-cms-api';

@Component({
    selector: 'app-sms-main-api-path-edit',
    templateUrl: './smsMainApiPathEdit.component.html',
    styleUrls: ['./smsMainApiPathEdit.component.scss'],
})
export class SmsMainApiPathEditComponent implements OnInit {

    dataModelEnumRecordStatusResult: ErrorExcptionResult<EnumModel> = new ErrorExcptionResult<EnumModel>();
    formInfo: FormInfoModel = new FormInfoModel();
    dataModel: SmsMainApiPathModel = new SmsMainApiPathModel();
    dataModelResult: ErrorExcptionResult<SmsMainApiPathModel> = new ErrorExcptionResult<SmsMainApiPathModel>();
    id = 0;
    loadingStatus = false; // add one more property
    @Input()
    set options(model: any) {
        this.dateModleInput = model;
    }
    get options(): any {
        return this.dateModleInput;
    }
    @ViewChild('vform', {static: false})
    formGroup: FormGroup;
    private dateModleInput: any;


    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private activatedRoute: ActivatedRoute,
        public smsMainApiPathService: SmsMainApiPathService,
        public coreEnumService: CoreEnumService,
        private toastrService: CmsToastrService,
        private publicHelper: PublicHelper
    ) {
        // this.coreEnumService.resultEnumRecordStatusObs.subscribe((vlaue) => {
        //   if (vlaue && vlaue.IsSuccess) {
        //     this.coreEnumService.resultEnumRecordStatus = vlaue;
        //   }
        //   this.coreEnumService.ServiceEnumRecordStatus();
        // });
    }

    ngOnInit() {
        this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

        this.activatedRoute.queryParams.subscribe((params) => {
            // Defaults to 0 if no query param provided.
            this.id = +params['id'] || 0;
        });
        if (this.dateModleInput && this.dateModleInput.id) {
            this.id = this.dateModleInput.id;
        }
        this.DataGetOneContent();
        // alert("helo id:"+this.linkCategoryId)
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
        this.smsMainApiPathService.ServiceGetOneById(this.id).subscribe(
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
                const title = 'برروی خطا در دریافت اطلاعات';
                const message = this.publicHelper.CheckError(error);
                this.toastrService.toastr.error(message, title);
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
        this.smsMainApiPathService.ServiceEdit(this.dataModel).subscribe(
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

                const title = 'برروی خطا در دریافت اطلاعات';
                const message = this.publicHelper.CheckError(error);
                this.toastrService.toastr.error(message, title);
                this.loadingStatus = false;
            }
        );
    }

    setFocus($event) {
        $event.focus();
    }
}
