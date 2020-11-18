
import { Component, OnInit, Input, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { ITreeOptions, KEYS, TreeComponent, TreeNode, TREE_ACTIONS } from '@circlon/angular-tree-component';
import { ErrorExcptionResult, FilterModel, CoreModuleTagCategoryModel, CoreModuleTagCategoryService } from 'ntk-cms-api';
import { ComponentOptionCoreModuleTagCategoryModel } from 'src/app/core/models/coreModule/componentOptionCoreModuleTagCategoryModel';
import { CmsToastrService } from 'src/app/core/services/base/cmsToastr.service';




@Component({
  selector: 'app-coremodule-tagcategory-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class CoreModuleTagCategorySelectComponent implements OnInit {
  @ViewChild('tree', { static: false }) tree: TreeComponent;

  @Input()
  set options(modelInput: ComponentOptionCoreModuleTagCategoryModel) {
    this.optionsData = modelInput;
  }
  get options(): ComponentOptionCoreModuleTagCategoryModel {
    return this.optionsData;
  }
  private optionsData: ComponentOptionCoreModuleTagCategoryModel;
  loadingStatus = false; // add one more property


  filteModelCategory = new FilterModel();
  dataModelCategory: ErrorExcptionResult<CoreModuleTagCategoryModel> = new ErrorExcptionResult<CoreModuleTagCategoryModel>();

  optionsModelTree: ITreeOptions = {
    idField: 'id',
    displayField: 'Title',
    childrenField: 'Children',
    // hasChildrenField: 'Children',
    // isExpandedField: 'expanded',
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
    nodeClass: (node: TreeNode) => {
      return 'icon-ntk-' + node.data.icon;
    }
  };
  constructor(
    private toastrService: CmsToastrService,
    public categoryService: CoreModuleTagCategoryService
  ) { }

  ngOnInit(): void {
    this.DataGetAllCategory();

    // this.optionsData.methods = { ActionReload: () => this.onActionReload() }
    this.optionsData.methods = {
      ActionReload: () => this.onActionReload(),
      ActionSelectForce: (id) => this.onActionSelectForce(id),
    };

  }
  DataGetAllCategory(): void {
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
        this.toastrService.typeError(error);
        this.loadingStatus = false;
      }
    );
  }
  onActionSelect(model: CoreModuleTagCategoryModel): void {
    if (this.optionsData && this.optionsData.actions && this.optionsData.actions.onActionSelect) {
      this.optionsData.actions.onActionSelect(model);
      this.optionsData.data = { SelectId: model.Id, Select: model };
    }

  }
  onActionReload(): void {
    this.DataGetAllCategory();
  }
  onActionSelectForce(id: number): void {

  }
}
