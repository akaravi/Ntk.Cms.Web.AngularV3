import {
   CoreEnumService, EnumModel, ErrorExcptionResult, FormInfoModel,
  CoreModuleTagService, CoreModuleTagModel
} from 'ntk-cms-api';
import { Component, OnInit, Input, ViewChild, ChangeDetectorRef, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { PublicHelper } from 'src/app/core/cmsCommon/helper/publicHelper';
import { ComponentActionEnum } from 'src/app/core/cmsComponentModels/base/componentAction.enum';
import { CmsToastrService } from 'src/app/core/cmsService/base/cmsToastr.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';




@Component({
  selector: 'app-coremodule-tag-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class CoreModuleTagEditComponent implements OnInit {
  @Input()
  set options(model: any) {
    this.dateModleInput = model;
  }
  get options(): any {
    return this.dateModleInput;
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private changeDetectorRef: ChangeDetectorRef,

    private activatedRoute: ActivatedRoute,
    public coreEnumService: CoreEnumService,
    public Service: CoreModuleTagService,
    private toastrService: CmsToastrService,
    private publicHelper: PublicHelper,

  ) {
    console.log('data:', data);
    if (data) {
      this.id = data.id;
      this.parentId = data.parentId;
    }
    // this.coreEnumService.resultEnumRecordStatusObs.subscribe((vlaue) => {
    //   if (vlaue && vlaue.IsSuccess) { this.coreEnumService.resultEnumRecordStatus = vlaue; }
    //   this.coreEnumService.ServiceEnumRecordStatus() ;
    // });

  }
  private dateModleInput: any;
  loadingStatus = false; // add one more property


  dataModelResult: ErrorExcptionResult<CoreModuleTagModel> = new ErrorExcptionResult<CoreModuleTagModel>();
  dataModel: CoreModuleTagModel = new CoreModuleTagModel();
  id = 0;
  parentId = -1;
  ComponentAction = ComponentActionEnum.none;
  @ViewChild('vform', { static: false }) formGroup: FormGroup;


  formInfo: FormInfoModel = new FormInfoModel();
  dataModelEnumRecordStatusResult: ErrorExcptionResult<EnumModel> = new ErrorExcptionResult<EnumModel>();
  ngOnInit(): void {
    // get Id
    if (this.id === 0) {
      this.id = Number(
        this.activatedRoute.snapshot.paramMap.get('id')
      );
    }
    if (this.id === 0) {
      this.activatedRoute.queryParams.subscribe((params) => {
        // Defaults to 0 if no query param provided.
        if (params.id && params.id > 0) {
          this.id = +params.id || 0;
        }
      });
    }
    if (this.id === 0) {
      if (this.dateModleInput && this.dateModleInput.id) {
        this.id = this.dateModleInput.id;
      }
    }
    // get Id
    // get parentId
    if (this.parentId === 0) {
      this.parentId = Number(
        this.activatedRoute.snapshot.paramMap.get('parentId')
      );
    }
    if (this.parentId === 0) {
      this.activatedRoute.queryParams.subscribe((params) => {
        // Defaults to 0 if no query param provided.
        if (params.parentId && params.parentId > 0) { this.parentId = +params.parentId || -1; }
      });
    }
    if (this.parentId === 0) {
      if (this.dateModleInput && this.dateModleInput.parentId) {
        this.parentId = this.dateModleInput.parentId;
      }
    }
    // get parentId
    if (this.parentId >= 0) {
      this.ComponentAction = ComponentActionEnum.add;
    }
    if (this.id) {
      this.ComponentAction = ComponentActionEnum.edit;
      this.DataGetOneContent();
    }
    if (this.ComponentAction === ComponentActionEnum.none) {
      this.toastrService.typeErrorComponentAction();
    }
    this.getEnumRecordStatus();
  }

  getEnumRecordStatus(): void {
    this.coreEnumService.ServiceEnumRecordStatus().subscribe((res) => {
      this.dataModelEnumRecordStatusResult = res;
    });
  }




  DataGetOneContent(): void {
    if (this.id <= 0) {
      this.toastrService.typeErrorEditRowIsNull();
      return;
    }

    this.formInfo.formAlert = 'در دریافت ارسال اطلاعات از سرور';
    this.formInfo.formError = '';
    this.loadingStatus = true;
    this.Service
      .ServiceGetOneById(this.id)
      .subscribe(
        (next) => {
          this.dataModel = next.Item;
          if (next.IsSuccess) {
            this.formInfo.formAlert = '';
          } else {
            this.formInfo.formAlert = 'برروز خطا';
            this.formInfo.formError = next.ErrorMessage;
          }
          this.loadingStatus = false;
        },
        (error) => {
          this.toastrService.typeError(error);
          this.loadingStatus = false;
        }
      );
  }
  DataAddContent(): void {
    this.formInfo.formAlert = 'در حال ارسال اطلاعات به سرور';
    this.formInfo.formError = '';
    this.loadingStatus = true;
    if (this.parentId > 0) {
      this.dataModel.LinkCategoryId = this.parentId;
    }
    this.Service
      .ServiceAdd(this.dataModel)
      .subscribe(
        (next) => {
          this.formInfo.formAllowSubmit = true;
          this.dataModelResult = next;
          if (next.IsSuccess) {
            this.formInfo.formAlert = 'ثبت با موفقت انجام شد';
            this.toastrService.typeSuccessAdd();
          } else {
            this.formInfo.formAlert = 'برروز خطا';
            this.formInfo.formError = next.ErrorMessage;
          }
          this.loadingStatus = false;
        },
        (error) => {
          this.formInfo.formAllowSubmit = true;
          this.toastrService.typeError(error);
          this.loadingStatus = false;
        }
      );
  }
  DataEditContent(): void {
    this.formInfo.formAlert = 'در حال ارسال اطلاعات به سرور';
    this.formInfo.formError = '';
    this.loadingStatus = true;
    this.Service
      .ServiceEdit(this.dataModel)
      .subscribe(
        (next) => {
          this.formInfo.formAllowSubmit = true;
          this.dataModelResult = next;
          if (next.IsSuccess) {
            this.formInfo.formAlert = 'ثبت با موفقت انجام شد';
            this.toastrService.typeSuccessEdit();
          } else {
            this.formInfo.formAlert = 'برروز خطا';
            this.formInfo.formError = next.ErrorMessage;
          }
          this.loadingStatus = false;
        },
        (error) => {
          this.formInfo.formAllowSubmit = true;
          this.toastrService.typeError(error);
          this.loadingStatus = false;
        }
      );
  }
  onFormSubmit(): void {
    if (this.formGroup.valid) {
      this.formInfo.formAllowSubmit = false;
      if (this.ComponentAction === ComponentActionEnum.add) {
        this.DataAddContent();
      }
      if (this.ComponentAction === ComponentActionEnum.edit) {
        this.DataEditContent();
      }

    }
  }
  onFormCancel(): void {
    this.formGroup.reset();
  }
}
