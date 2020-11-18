
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import {  CoreEnumService, ErrorExcptionResult, FilterModel, FormInfoModel,  NewsCategoryModel,  NewsCategoryService } from 'ntk-cms-api';
import { PublicHelper } from 'src/app/core/cmsCommon/helper/publicHelper';
import { CmsToastrService } from 'src/app/core/cmsService/base/cmsToastr.service';


@Component({
  selector: 'app-news-category-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class NewsCategoryDeleteComponent implements OnInit {

  @Input()
  set options(model: any) {
    this.dateModleInput = model;
  }
  get options(): any {
    return this.dateModleInput;
  }

  id: any;

  private dateModleInput: any;

  dataModelResultCategory: ErrorExcptionResult<NewsCategoryModel> = new ErrorExcptionResult<NewsCategoryModel>();
  dataModelResultCategoryAllData: ErrorExcptionResult<NewsCategoryModel> = new ErrorExcptionResult<NewsCategoryModel>();

  dataModel: any = {};
  @ViewChild('vform', { static: false }) formGroup: FormGroup;
  formInfo: FormInfoModel = new FormInfoModel();
  constructor(
    private activatedRoute: ActivatedRoute,
    private coreEnumService: CoreEnumService,
    private newsCategoryService: NewsCategoryService,
    private toastrService: CmsToastrService,
    private publicHelper: PublicHelper
  ) { }
  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.activatedRoute.queryParams.subscribe((params) => {
      // Defaults to 0 if no query param provided.
      this.id = +params.id || 0;
    });
    if (this.dateModleInput && this.dateModleInput.id) {
      this.id = this.dateModleInput.id;
    }
    if (this.id === 0) {
      this.toastrService.typeErrorDeleteRowIsNull();
      return;
    }
    this.DataGetOne();
    this.DataGetAll();
  }

  DataGetOne(): void {

    this.formInfo.formAlert = 'در حال لود اطلاعات';
    this.newsCategoryService
      .ServiceGetOneById(this.id)
      .subscribe(
        (next) => {
          this.dataModelResultCategory = next;
          if (!next.IsSuccess) {
            this.formInfo.formAlert = 'برروز خطا';
            this.formInfo.formError = next.ErrorMessage;
            this.formInfo.formErrorStatus = true;
          } else {
            this.formInfo.formAlert = '';
          }
        },
        (error) => {
          this.formInfo.formAlert = 'برروز خطا';
          this.formInfo.formErrorStatus = true;
          this.toastrService.toastr.error(
            this.publicHelper.CheckError(error),
            'برروی خطا در دریافت اطلاعات'
          );
        }
      );

  }
  DataGetAll(): void {

    this.formInfo.formAlert = 'در حال لود اطلاعات';
    const filterModel: FilterModel = new FilterModel();
    filterModel.RowPerPage = 100;
    this.newsCategoryService
      .ServiceGetAll(filterModel)
      .subscribe(
        (next) => {
          this.dataModelResultCategoryAllData = next;
          if (!next.IsSuccess) {
            this.formInfo.formAlert = 'برروز خطا';
            this.formInfo.formError = next.ErrorMessage;
            this.formInfo.formErrorStatus = true;
          } else {
            this.formInfo.formAlert = '';
          }
        },
        (error) => {
          this.formInfo.formAlert = 'برروز خطا';
          this.formInfo.formErrorStatus = true;
          this.toastrService.toastr.error(
            this.publicHelper.CheckError(error),
            'برروی خطا در دریافت اطلاعات'
          );
        }
      );

  }
  onFormMove(): void {
    if (this.id === 0) {
      this.toastrService.typeErrorDeleteRowIsNull();
      return;
    }
    if (this.formGroup.valid) {
      this.formInfo.formAllowSubmit = true;
      if (this.dataModel.NewCatId === this.id) {
        this.formInfo.formAlert = 'برروز خطا';
        this.formInfo.formError =
          'شناسه دسته بندی در حال حذف با دسته بندی جایگزین یکسان است';
        this.formInfo.disabledButtonSubmitted = false;
      }
      this.DataMove();
    }
  }
  onFormDelete(): void {
    if (this.id === 0) {
      this.toastrService.typeErrorDeleteRowIsNull();
      return;
    }
    if (this.formGroup.valid) {
      this.formInfo.formAllowSubmit = false;
      this.DataDelete();
    }
  }
  onFormChangeNewCatId(): void {
    if (this.id === 0) {
      this.toastrService.typeErrorDeleteRowIsNull();
      return;
    }
    if (this.dataModel.NewCatId === this.id) {
      this.formInfo.formAlert = 'برروز خطا';
      this.formInfo.formError =
        'شناسه دسته بندی در حال حذف با دسته بندی جایگزین یکسان است';
      this.formInfo.disabledButtonSubmitted = true;
    } else {
      this.formInfo.disabledButtonSubmitted = false;
      this.formInfo.formError = '';
    }
  }
  DataDelete(): void {
    if (this.id === 0) {
      this.toastrService.typeErrorDeleteRowIsNull();
      return;
    }
    this.formInfo.disabledButtonSubmitted = true;

    this.newsCategoryService
      .ServiceDelete(this.id)
      .subscribe(
        (next) => {
          this.formInfo.formAllowSubmit = !next.IsSuccess;
          if (!next.IsSuccess) {
            this.formInfo.formAlert = 'برروز خطا';
            this.formInfo.formError = next.ErrorMessage;

          } else {
            this.formInfo.formAlert = 'حذف با موفقیت انجام شد';
          }
          this.formInfo.disabledButtonSubmitted = false;

        },
        (error) => {
          this.formInfo.formAlert = 'برروز خطا';
          this.formInfo.formAllowSubmit = true;
          this.toastrService.toastr.error(
            this.publicHelper.CheckError(error),
            'برروی خطا در دریافت اطلاعات'
          );
          this.formInfo.disabledButtonSubmitted = false;

        }
      );
  }
  DataMove(): void {
    if (this.id === 0) {
      this.toastrService.typeErrorDeleteRowIsNull();
      return;
    }
    this.formInfo.disabledButtonSubmitted = true;
    this.newsCategoryService
      .ServiceMove(this.id, this.dataModel.NewCatId)
      .subscribe(
        (next) => {
          if (!next.IsSuccess) {
            this.formInfo.formAlert = 'برروز خطا';
            this.formInfo.formError = next.ErrorMessage;
          } else {
            this.formInfo.formAlert = 'جابجایی با موفقیت انجام شد';
          }
          this.formInfo.formAllowSubmit = false;
          this.formInfo.disabledButtonSubmitted = false;
        },
        (error) => {
          this.formInfo.formAlert = 'برروز خطا';
          this.toastrService.toastr.error(
            this.publicHelper.CheckError(error),
            'برروی خطا در دریافت اطلاعات'
          );
          this.formInfo.disabledButtonSubmitted = false;
          this.formInfo.formAllowSubmit = true;
        }
      );
  }

}
