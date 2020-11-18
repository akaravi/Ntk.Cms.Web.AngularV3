import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';


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
import { CmsToastrService } from 'src/app/core/services/base/cmsToastr.service';




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
    private coreSiteService: CoreSiteService,
    private coreAuthService: CoreAuthService,

    private coreModuleService: CoreModuleService,
    private coreSiteCategoryService: CoreSiteCategoryService
  ) { }

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
        this.toastrService.typeError(error);
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
        this.toastrService.typeError(error);
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
          this.toastrService.typeError(error);
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
            this.toastrService.typeError(error2);
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
            this.toastrService.typeError(error);
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
            this.toastrService.typeError(error);
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
          this.toastrService.typeError(error);
        }
      )
    );
  }
}
