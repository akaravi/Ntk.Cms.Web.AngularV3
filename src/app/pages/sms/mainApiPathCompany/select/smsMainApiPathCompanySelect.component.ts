import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { TREE_ACTIONS, ITreeOptions, KEYS } from 'angular-tree-component';
import { PublicHelper } from 'app/@cms/cmsCommon/helper/publicHelper';

import { ComponentOptionSmsMainApiPathCompanyModel } from 'app/@cms/cmsComponentModels/sms/componentOptionSmsMainApiPathCompanyModel';
import { CmsToastrService } from 'app/@cms/cmsService/base/cmsToastr.service';
import {
  FilterModel,
  ErrorExcptionResult,
  SmsMainApiPathCompanyService,
  SmsMainApiPathCompanyModel,
} from 'ntk-cms-api';

@Component({
  selector: 'app-sms-main-api-path-company-select',
  templateUrl: './smsMainApiPathCompanySelect.component.html',
  styleUrls: ['./smsMainApiPathCompanySelect.component.scss'],
})
export class SmsMainApiPathCompanySelectComponent implements OnInit {
  @Input()
  set options(model: ComponentOptionSmsMainApiPathCompanyModel) {
    this.optionsData = model;
  }
  get options(): ComponentOptionSmsMainApiPathCompanyModel {
    return this.optionsData;
  }
  private optionsData: ComponentOptionSmsMainApiPathCompanyModel = new ComponentOptionSmsMainApiPathCompanyModel();
  loadingStatus = false; // add one more property

  filteModelCategory = new FilterModel();
  dataModelCategory: ErrorExcptionResult<any> = new ErrorExcptionResult<any>();
  optionsModelTree: ITreeOptions = {
    idField: 'id',
    displayField: 'Title',
    childrenField: 'Children',
    actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) {
            TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
          }
        },
        click: (tree, node) => {
          this.onActionSelect(node.data);
        },
      },
      keys: {
        [KEYS.ENTER]: (tree, node) => {
          node.expandAll();
        },
      },
    },
    // nodeHeight: 23,
    allowDrag: () => {
      return false;
    },
    allowDrop: () => {
      return false;
    },
    allowDragoverStyling: true,
    levelPadding: 10,
    // useVirtualScroll: true,
    animateExpand: true,
    scrollOnActivate: true,
    animateSpeed: 30,
    animateAcceleration: 1.2,
    // scrollContainer: document.documentElement, // HTML
    rtl: true,
  };

  constructor(
    private toastrService: CmsToastrService,
    private publicHelper: PublicHelper,
    public categoryService: SmsMainApiPathCompanyService
  ) {}

  ngOnInit() {
    this.DataGetAllCategory();

    this.optionsData.methods = { ActionReload: () => this.onActionReload() };
  }

  DataGetAllCategory() {
    this.filteModelCategory.RowPerPage = 200;

    this.loadingStatus = true;
    this.categoryService.ServiceGetAll(this.filteModelCategory).subscribe(
      (next) => {
        if (next.IsSuccess) {
          this.dataModelCategory = next;
        }
        this.loadingStatus = false;
      },
      (error) => {
        this.toastrService.toastr.error(
          this.publicHelper.CheckError(error),
          'برروی خطا در دریافت اطلاعات'
        );
        this.loadingStatus = false;
      }
    );
  }
  onActionSelect(model: SmsMainApiPathCompanyModel) {
    if (
      this.optionsData &&
      this.optionsData.actions &&
      this.optionsData.actions.onActionSelect
    ) {
      this.optionsData.actions.onActionSelect(model);
      this.optionsData.data = { Select: model, SelectId: model.Id };
    }
  }
  onActionReload() {
    this.DataGetAllCategory();
  }
}
