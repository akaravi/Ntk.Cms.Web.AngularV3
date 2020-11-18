import { Component, OnInit, ViewChild } from '@angular/core';

import {
  CoreSiteService,
  ErrorExcptionResult,
  FilterModel,
} from 'ntk-cms-api';
import { CmsToastrService } from 'src/app/core/services/base/cmsToastr.service';

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
  // @ViewChild(DatatableComponent, { static: false })
  // table: DatatableComponent;
  filteModel = new FilterModel();
  dataModelSite: ErrorExcptionResult<any> = new ErrorExcptionResult<any>();

  constructor(
    private toastrService: CmsToastrService,
    private coreSiteService: CoreSiteService,

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
        this.toastrService.typeError(error);
      }
    );
  }
}
