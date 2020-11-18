import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PublicHelper } from 'app/@cms/cmsCommon/helper/publicHelper';
import { DatatableComponent } from '@swimlane/ngx-datatable/release';
import { CmsToastrService } from 'app/@cms/cmsService/base/cmsToastr.service';
import {
  CoreModuleService,
  CoreSiteCategoryModuleService,
  CoreSiteCategoryService,
  CoreSiteService,
  ErrorExcptionResult,
  FilterModel,
} from 'ntk-cms-api';

@Component({
  selector: 'app-cms-site-list',
  templateUrl: './coreSiteList.component.html',
  styleUrls: ['./coreSiteList.component.scss'],
})
export class CoreSiteListComponent implements OnInit {
  // Table Column Titles
  columns = [
    {
      prop: 'Title',
    },
    {
      name: 'Domain',
    },
    {
      name: 'SubDomain',
    },
  ];
  @ViewChild(DatatableComponent, { static: false })
  table: DatatableComponent;
  filteModel = new FilterModel();
  dataModelSite: ErrorExcptionResult<any> = new ErrorExcptionResult<any>();

  constructor(
    private toastrService: CmsToastrService,
    private publicHelper: PublicHelper,
    private coreSiteService: CoreSiteService,
    private coreSiteCategoryModuleService: CoreSiteCategoryModuleService,
    private coreModuleService: CoreModuleService,
    private coreSiteCategoryService: CoreSiteCategoryService
  ) {}

  ngOnInit() {
    this.DataGetAll();
  }
  DataGetAll() {
    this.coreSiteService.ServiceGetAll(this.filteModel).subscribe(
      (next) => {
        if (next.IsSuccess) {
          this.dataModelSite = next;
        }
      },
      (error) => {
        this.toastrService.toastr.error(
          this.publicHelper.CheckError(error),
          'برروی خطا در دریافت اطلاعات'
        );
      }
    );
  }
}
