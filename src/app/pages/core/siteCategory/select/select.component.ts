import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PublicHelper } from 'app/@cms/cmsCommon/helper/publicHelper';
import {
  CoreModuleService,
  CoreSiteCategoryModuleService,
  CoreSiteCategoryService,
  ErrorExcptionResult,
  FilterDataModel,
  FilterModel,
} from 'ntk-cms-api';
import { CmsToastrService } from 'app/@cms/cmsService/base/cmsToastr.service';

@Component({
  selector: 'app-core-site-category-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class CoreSiteCategorySelectComponent implements OnInit {
  subManager = new Subscription();
  filteModel = new FilterModel();
  dataModelCategory: ErrorExcptionResult<any>;
  dataModelModule: ErrorExcptionResult<any>;
  dataModelLoad = false;
  dataSelectedSiteCategory: any = {};
  model: any = {};

  constructor(
    private coreSiteCategoryService: CoreSiteCategoryService,
    private coreSiteCategoryModuleService: CoreSiteCategoryModuleService,
    private coreModuleService: CoreModuleService,
    private toastrService: CmsToastrService,
    private publicHelper: PublicHelper
  ) {}

  ngOnInit() {
    this.CoreSiteCategoryGetAll();
  }

  CoreSiteCategoryGetAll() {
    this.subManager.add(
      this.coreSiteCategoryService.ServiceGetAll(this.filteModel).subscribe(
        (next) => {
          if (next.IsSuccess) {
            this.dataModelCategory = next;
            this.dataModelLoad = true;
            this.toastrService.toastr.info('اطلاعات دریافت شد', 'توجه');
          }
        },
        (error) => {
          this.toastrService.toastr.error(
            this.publicHelper.CheckError(error),
            'خطا در دریافت اطلاعات وب سایتها'
          );
        }
      )
    );
  }
  trackByFn() {}
  clickSelectSiteCategory(model) {
    let filterModelCategory: FilterModel;
    filterModelCategory = new FilterModel();
    let filterDataModel: FilterDataModel;
    filterDataModel = new FilterDataModel();
    filterDataModel.IntValue1 = model['Id'];
    filterDataModel.PropertyName = 'LinkCmsSiteCategoryId';
    filterModelCategory.Filters.push(filterDataModel);

    this.dataSelectedSiteCategory = model;
    this.dataModelModule = new ErrorExcptionResult<any>();
    this.subManager.add(
      this.coreSiteCategoryModuleService
        .ServiceGetAll(filterModelCategory)
        .subscribe(
          (next) => {
            if (next.IsSuccess) {
              let filterModelCategory2: FilterModel;
              filterModelCategory2 = new FilterModel();
              let filterDataModel2: FilterDataModel;
              filterDataModel2 = new FilterDataModel();
              next.ListItems.forEach((element) => {
                filterDataModel2.IntContainValues.push(
                  element['LinkCmsModuleId']
                );
              });

              filterDataModel2.PropertyName = 'Id';
              filterModelCategory2.Filters.push(filterDataModel2);
              this.coreModuleService
                .ServiceGetAll(filterModelCategory2)
                .subscribe(
                  (next2) => {
                    if (next2.IsSuccess) {
                      this.dataModelModule = next2;
                      this.dataModelLoad = true;
                      this.toastrService.toastr.info(
                        'اطلاعات دریافت شد',
                        'توجه'
                      );
                    }
                  },
                  (error2) => {
                    this.toastrService.toastr.error(
                      this.publicHelper.CheckError(error2),
                      'خطا در دریافت اطلاعات وب سایتها'
                    );
                  }
                );
            }
          },
          (error) => {
            this.toastrService.toastr.error(
              this.publicHelper.CheckError(error),
              'خطا در دریافت اطلاعات وب سایتها'
            );
          }
        )
    );
  }
}
