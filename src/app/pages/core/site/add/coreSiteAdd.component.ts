import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { PublicHelper } from 'app/@cms/cmsCommon/helper/publicHelper';
import {
  CaptchaModel,
  CoreAuthService,
  CoreModuleService,
  CoreSiteCategoryModuleService,
  CoreSiteCategoryService,
  CoreSiteService,
  ErrorExcptionResult,
  FilterModel,
} from 'ntk-cms-api';
import { CmsToastrService } from 'app/@cms/cmsService/base/cmsToastr.service';

@Component({
  selector: 'app-cms-site-add',
  templateUrl: './coreSiteAdd.component.html',
  styleUrls: ['./coreSiteAdd.component.scss'],
})
export class CoreSiteAddComponent implements OnInit {

  @Input()
  set dateInput(model: any) {
    this.dateModleInput = model;
  }
  get dateInput(): any {
    return this.dateModleInput;
  }
  subManager = new Subscription();
  filteModel = new FilterModel();
  dataModel: ErrorExcptionResult<any> = new ErrorExcptionResult<any>();
  dataModelLoad = false;
  dataModelDomains = [];
  dataModelModule: ErrorExcptionResult<any>;
  dataModelCategory: ErrorExcptionResult<any>;

  selectedDomain: any;
  captchaModel: CaptchaModel = new CaptchaModel();

  private dateModleInput: any;

  constructor(
    private toastrService: CmsToastrService,
    private publicHelper: PublicHelper,
    private coreSiteService: CoreSiteService,
    private coreSiteCategoryModuleService: CoreSiteCategoryModuleService,
    private coreAuthService: CoreAuthService,

    private coreModuleService: CoreModuleService,
    private coreSiteCategoryService: CoreSiteCategoryService
  ) {}

  ngOnInit() {
    this.GetModelInfo();
    this.GetDomainList();
    this.CoreSiteCategoryGetAll();
    this.onCaptchaOrder();
  }
  GetDomainList() {
    this.coreSiteService.ServiceDomains(0).subscribe(
      (next) => {
        if (next.IsSuccess) {
          this.dataModelDomains = next.ListItems;
        }
      },
      (error) => {
        this.toastrService.toastr.error(
          this.publicHelper.CheckError(error),
          'خطا در دریافت لیست دامنه های قابل استفاده'
        );
      }
    );
  }
  GetModelInfo() {
    this.coreSiteService.ServiceViewModel().subscribe(
      (next) => {
        if (next.IsSuccess) {
          this.dataModel = next;
        }
      },
      (error) => {
        this.toastrService.toastr.error(
          this.publicHelper.CheckError(error),
          'خطا در دریافت مدل'
        );
      }
    );
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
  clickSelectSiteCategory(Id: number) {
    const filterModel: FilterModel = new FilterModel();
    filterModel.RowPerPage = 50;

    this.dataModelModule = new ErrorExcptionResult<any>();
    this.subManager.add(
      this.coreModuleService
        .ServiceGetAllByCategorySiteId(Id, filterModel)
        .subscribe(
          (next2) => {
            if (next2.IsSuccess) {
              this.dataModelModule = next2;
              this.dataModelLoad = true;
              this.toastrService.toastr.info('اطلاعات دریافت شد', 'توجه');
            }
          },
          (error2) => {
            this.toastrService.toastr.error(
              this.publicHelper.CheckError(error2),
              'خطا در دریافت اطلاعات وب سایتها'
            );
          }
        )
    );
  }
  onSubmit() {
    let AddFirstSite = false;
    if (this.dateModleInput && this.dateModleInput.AddFirstSite) {
      AddFirstSite = true;
    }
    this.dataModel.Item.captchaKey = this.captchaModel.Key;

    if (AddFirstSite) {
      this.subManager.add(
        this.coreSiteService.ServiceAddFirstSite(this.dataModel.Item).subscribe(
          (next) => {
            this.dateModleInput.onActionAddFirstSite(next);
          },
          (error) => {
            this.toastrService.toastr.error(
              this.publicHelper.CheckError(error),
              'خطا در ساخت وب سایت'
            );
          }
        )
      );
    } else {
      this.subManager.add(
        this.coreSiteService.ServiceAdd(this.dataModel.Item).subscribe(
          (next) => {
            if (next.IsSuccess) {
            }
          },
          (error) => {
            this.toastrService.toastr.error(
              this.publicHelper.CheckError(error),
              'خطا در ساخت وب سایت'
            );
          }
        )
      );
    }
  }
  onCaptchaOrder() {
    this.subManager.add(
      this.coreAuthService.ServiceCaptcha().subscribe(
        (next) => {
          this.captchaModel = next.Item;
        },
        (error) => {
          this.toastrService.toastr.error(
            this.publicHelper.CheckError(error),
            'خطا در دریافت عکس کپچا'
          );
        }
      )
    );
  }
}
