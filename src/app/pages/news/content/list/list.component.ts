import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ErrorExcptionResult,
  FilterModel,
  NewsContentService,
  NewsContentModel,
  NewsCategoryModel,
  FilterDataModel,
} from 'ntk-cms-api';

import { NewsContentAddComponent } from '../add/add.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NewsCategoryEditComponent } from '../../category/edit/edit.component';
import { NewsCategoryDeleteComponent } from '../../category/delete/delete.component';
import { ComponentOptionNewsCategoryModel } from 'src/app/core/models/news/componentOptionNewsCategoryModel';
import { ComponentModalDataModel } from 'src/app/core/models/base/componentModalDataModel';
import { ComponentOptionSearchContentModel } from 'src/app/core/models/base/componentOptionSearchContentModel';
import { CmsToastrService } from 'src/app/core/services/base/cmsToastr.service';
import { PublicHelper } from 'src/app/core/common/helper/publicHelper';


@Component({
  selector: 'app-news-content-list',
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
export class NewsContentListComponent implements OnInit {

  filteModelContent = new FilterModel();
  filteModelCategory = new FilterModel();
  dataModelResult: ErrorExcptionResult<NewsContentModel> = new ErrorExcptionResult<NewsContentModel>();
  optionsCategorySelect: ComponentOptionNewsCategoryModel = new ComponentOptionNewsCategoryModel();
  modalModel: ComponentModalDataModel = new ComponentModalDataModel();
  optionsSearch: ComponentOptionSearchContentModel = new ComponentOptionSearchContentModel();
  tableContentloading = false;
  tableContentSelected: Array<NewsContentModel> = [];
  // dateObject: any;
  loadingStatus = false; // add one more property

  constructor(
    private toastrService: CmsToastrService,
    private newsContentService: NewsContentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    public publicHelper: PublicHelper


  ) {
    this.optionsSearch.actions = { onSubmit: (model) => this.onSubmitOptionsSearch(model) };
  }
  displayedColumns: string[] = ['Id', 'LinkSiteId', 'RecordStatus', 'Title', 'CreatedDate', 'UpdatedDate', 'operation'];
  expandedElement: NewsContentModel | null;

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
    this.newsContentService.ServiceGetAll(this.filteModelContent).subscribe(
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


  onActionCategorySelect(model: NewsCategoryModel | null): void {
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
    const dialogRef = this.dialog.open(NewsCategoryEditComponent, {
      data: {
        parentId
      }
    });




    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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
    const dialogRef = this.dialog.open(NewsCategoryEditComponent, {
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

    const dialogRef = this.dialog.open(NewsCategoryDeleteComponent, {
      data: {
        id: this.optionsCategorySelect.data.SelectId
      }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(NewsCategoryDeleteComponent);

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
    const modalModel: ComponentModalDataModel = {
      Title: 'محتوای جدید',
      SwitchValue: 'contentContentAdd'
    };
    this.router.navigate(['add'], { relativeTo: this.activatedRoute, queryParams: { parentId: this.optionsCategorySelect.data.SelectId } });

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

    this.router.navigate(['edit'], { relativeTo: this.activatedRoute, queryParams: { id: this.tableContentSelected[0].Id } });

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
    const dialogRef = this.dialog.open(NewsContentAddComponent);

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

  onClickComment(id: number): void {
    this.router.navigate(['comment/', id], { relativeTo: this.activatedRoute });
  }
}
