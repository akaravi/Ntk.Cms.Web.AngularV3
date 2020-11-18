import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorExcptionResult, FilterModel, CoreModuleTagService, CoreModuleTagModel, CoreModuleTagCategoryModel, FilterDataModel } from 'ntk-cms-api';
import { ComponentModalDataModel } from 'src/app/core/cmsComponentModels/base/componentModalDataModel';
import { ComponentOptionSearchContentModel } from 'src/app/core/cmsComponentModels/base/componentOptionSearchContentModel';
import { CmsToastrService } from 'src/app/core/cmsService/base/cmsToastr.service';
import { PublicHelper } from 'src/app/core/cmsCommon/helper/publicHelper';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CoreModuleNetwork } from '../../coreModule.network';
import { ComponentOptionCoreModuleTagCategoryModel } from '../../../../core/cmsComponentModels/coreModule/componentOptionCoreModuleTagCategoryModel';
import { CoreModuleTagCategoryEditComponent } from '../../tagCategory/edit/edit.component';
import { CoreModuleTagCategoryDeleteComponent } from '../../tagCategory/delete/delete.component';

import { CoreModuleTagEditComponent } from '../edit/edit.component';
import { CoreModuleTagDeleteComponent } from '../delete/delete.component';


@Component({
  selector: 'app-coremodule-tag-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CoreModuleTagListComponent implements OnInit {

  filteModelContent = new FilterModel();
  filteModelCategory = new FilterModel();
  dataModelResult: ErrorExcptionResult<CoreModuleTagModel> = new ErrorExcptionResult<CoreModuleTagModel>();
  optionsCategorySelect: ComponentOptionCoreModuleTagCategoryModel = new ComponentOptionCoreModuleTagCategoryModel();
  modalModel: ComponentModalDataModel = new ComponentModalDataModel();
  optionsSearch: ComponentOptionSearchContentModel = new ComponentOptionSearchContentModel();
  tableContentloading = false;
  tableContentSelected: Array<CoreModuleTagModel> = [];
  // dateObject: any;
  loadingStatus = false; // add one more property

  constructor(
    private toastrService: CmsToastrService,
    private coreModuleTagService: CoreModuleTagService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataNetwork: CoreModuleNetwork,
    public dialog: MatDialog,
    public publicHelper: PublicHelper
  ) {
    this.optionsSearch.actions = { onSubmit: (model) => this.onSubmitOptionsSearch(model) };
  }
  displayedColumns: string[] = ['Id', 'LinkSiteId', 'RecordStatus', 'Title', 'CreatedDate', 'UpdatedDate'];
  expandedElement: CoreModuleTagModel | null;

  ngOnInit(): void {
    // this.dateObject = moment('1399-11-29', 'jYYYY,jMM,jDD');
    this.dataModelResult = this.activatedRoute.snapshot.data.list;
    this.optionsCategorySelect.actions = { onActionSelect: (x) => this.onActionCategorySelect(x) };
    if (this.dataModelResult.ListItems.length === 0) {
      this.DataGetAllContent();
    }
  }

  DataGetAllContent(): void {
    this.tableContentSelected = [];
    this.tableContentloading = true;
    this.loadingStatus = true;
    this.filteModelContent.AccessLoad = true;
    this.coreModuleTagService.ServiceGetAll(this.filteModelContent).subscribe(
      (next) => {
        if (next.IsSuccess) {
          this.dataModelResult = next;
          this.optionsSearch.methods.setAccess(next.Access);

          this.tableContentloading = false;
        }
        this.loadingStatus = false;

      },
      (error) => {
        this.toastrService.typeError(error),
          this.tableContentloading = false;
        this.loadingStatus = false;

      }
    );
  }

  // goToContentInsert(): void {
  //   this.router.navigate(['add'], { relativeTo: this.activatedRoute });
  // }

  // onClickEdit(item): void {
  //   this.dataNetwork.editUser(item.id);
  //   this.router.navigate(['edit'], { relativeTo: this.activatedRoute });


  //   if (this.router.url === '/news/content/list') {
  //     this.router.navigate(['../edit'], {
  //       queryParams: { id: item.Id },
  //     });
  //   } else {
  //     this.router.navigate([this.router.url + '/edit'], {
  //       queryParams: { id: item.Id },
  //     });
  //   }

  // }

  // onClickRemoveItem(id): void {
  //   this.coreModuleTagService
  //     .ServiceDelete(id)
  //     .subscribe((res) => {
  //       if (res.IsSuccess) {
  //         location.reload();
  //       }
  //     });
  // }


  onActionCategorySelect(model: CoreModuleTagCategoryModel | null): void {
    this.filteModelContent = new FilterModel();

    if (model && model.Id > 0) {
      const aaa = {
        PropertyName: 'LinkCategoryId',
        IntValue1: model.Id,
      };
      this.filteModelContent.Filters.push(aaa as FilterDataModel);
    }
    else {
      this.optionsCategorySelect = null;
      this.optionsCategorySelect.methods.ActionSelectForce(0);
    }
    this.DataGetAllContent();
  }
  onActionContentCategoryAdd(): void {
    let parentId = 0;
    if (this.optionsCategorySelect && this.optionsCategorySelect.data
      && this.optionsCategorySelect.data.SelectId && this.optionsCategorySelect.data.SelectId > 0) {
      parentId = this.optionsCategorySelect.data.SelectId;
    }
    const dialogRef = this.dialog.open(CoreModuleTagCategoryEditComponent, {
      data: {
        parentId
      }
    });




    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
  onActionContentCategoryEdit(): void {
    if (
      this.optionsCategorySelect == null ||
      this.optionsCategorySelect.data == null ||
      this.optionsCategorySelect.data.SelectId === 0
    ) {
      const title = 'برروز خطا ';
      const message = 'دسته بندی انتخاب نشده است';
      this.toastrService.toastr.error(message, title);
      return;
    }
    const dialogRef = this.dialog.open(CoreModuleTagCategoryEditComponent, {
      data: {
        id: this.optionsCategorySelect.data.SelectId
      }
    });




    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onActionContentCategoryDelete(): void {
    if (
      this.optionsCategorySelect == null ||
      this.optionsCategorySelect.data == null ||
      this.optionsCategorySelect.data.SelectId === 0
    ) {
      const title = 'برروز خطا ';
      const message = 'دسته بندی انتخاب نشده است';
      this.toastrService.toastr.error(message, title);
      return;
    }

    const dialogRef = this.dialog.open(CoreModuleTagCategoryDeleteComponent, {
      data: {
        id: this.optionsCategorySelect.data.SelectId
      }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CoreModuleTagCategoryDeleteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // onCloseModal(): void {

  // }


  onActionbuttonNewRow(): void {
    if (
      this.optionsCategorySelect == null ||
      this.optionsCategorySelect.data == null ||
      this.optionsCategorySelect.data.SelectId === 0
    ) {
      const title = 'برروز خطا ';
      const message = 'دسته بندی انتخاب نشده است';
      this.toastrService.toastr.error(message, title);
      return;
    }
    if (
      this.dataModelResult == null ||
      this.dataModelResult.Access == null ||
      !this.dataModelResult.Access.AccessAddRow
    ) {
      const title = 'برروز خطا ';
      const message = 'شما دسترسی برای اضافه کردن ندارید';
      this.toastrService.toastr.error(message, title);
      return;
    }


    const dialogRef = this.dialog.open(CoreModuleTagEditComponent, {
      data: {
        parentId: this.optionsCategorySelect.data.SelectId
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
   // this.router.navigate(['add'], { relativeTo: this.activatedRoute, queryParams: { parentId: this.optionsCategorySelect.data.SelectId } });

  }

  onActionbuttonEditRow(): void {
    if (
      this.tableContentSelected == null ||
      this.tableContentSelected.length === 0 ||
      this.tableContentSelected[0].Id === 0
    ) {
      const title = 'برروز خطا ';
      const message = 'ردیفی برای ویرایش انتخاب نشده است';
      this.toastrService.toastr.error(message, title);
      return;
    }
    if (
      this.dataModelResult == null ||
      this.dataModelResult.Access == null ||
      !this.dataModelResult.Access.AccessEditRow
    ) {
      const title = 'برروز خطا ';
      const message = 'شما دسترسی برای ویرایش ندارید';
      this.toastrService.toastr.error(message, title);
      return;
    }

    const dialogRef = this.dialog.open(CoreModuleTagEditComponent, {
      data: {
        id: this.tableContentSelected[0].Id
      }
    });




    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
  onActionbuttonDeleteRow(): void {
    if (
      this.tableContentSelected == null ||
      this.tableContentSelected.length === 0 ||
      this.tableContentSelected[0].Id === 0
    ) {
      const title = 'برروز خطا ';
      const message = 'ردیفی برای ویرایش انتخاب نشده است';
      this.toastrService.toastr.error(message, title);
      return;
    }
    if (
      this.dataModelResult == null ||
      this.dataModelResult.Access == null ||
      !this.dataModelResult.Access.AccessDeleteRow
    ) {
      const title = 'برروز خطا ';
      const message = 'شما دسترسی برای حذف ندارید';
      this.toastrService.toastr.error(message, title);
      return;
    }
    const modalModel: ComponentModalDataModel = {
      Title: 'حذف محتوا',
      SwitchValue: 'contentContentDelete'
    };
    const dialogRef = this.dialog.open(CoreModuleTagDeleteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onActionbuttonStatus(): void { }
  onActionbuttonExport(): void { }

  onActionbuttonReload(): void {
    this.DataGetAllContent();
  }
  onSubmitOptionsSearch(model: any): void {
    this.filteModelContent.Filters = model;
    this.DataGetAllContent();
  }
  onActionTableSelect(row: any): void {
    this.tableContentSelected = [row];
  }

}
