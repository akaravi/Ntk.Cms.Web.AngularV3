import { PublicHelper } from './../../../../core/common/helper/publicHelper';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  ModalDismissReasons,
  NgbModal,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import {
  ColumnMode,
  TableColumn,
  SelectionType,
} from '@swimlane/ngx-datatable';
import { CmsToastrService } from 'src/app/core/services/base/cmsToastr.service';
import { EnumSortType, ErrorExceptionResult, FilterModel, SmsMainApiPathCompanyModel, FilterDataModel, SmsMainApiPathService } from 'ntk-cms-api';
import { ComponentOptionSmsMainApiPathCompanyModel } from 'src/app/core/models/sms/componentOptionSmsMainApiPathCompanyModel';
import { ComponentOptionSearchContentModel } from 'src/app/core/models/base/componentOptionSearchContentModel';


@Component({
  selector: 'app-sms-main-api-path-list',
  templateUrl: './smsMainApiPathList.component.html',
  styleUrls: ['./smsMainApiPathList.component.scss'],
})
export class SmsMainApiPathListComponent implements OnInit {
  @ViewChild('contentContentAdd', { static: false })
  contentContentAdd: ElementRef;
  @ViewChild('contentContentEdit', { static: false })
  contentContentEdit: ElementRef;
  getId: number;
  optionsCategorySelect: ComponentOptionSmsMainApiPathCompanyModel = new ComponentOptionSmsMainApiPathCompanyModel();

  filteModelContent = new FilterModel();
  tableContentloading = false;
  tableContentSelected: Array<any> = [];
  dataModelResult: ErrorExceptionResult<any> = new ErrorExceptionResult<any>();
  dataModelResultViewModel: ErrorExceptionResult<any> = new ErrorExceptionResult<
    any
  >();
  columnMode = ColumnMode;
  selectionType = SelectionType;
  columnsContent: TableColumn[] = [
    {
      prop: 'Id',
      name: 'شناسه',
    },
    {
      prop: 'CreatedDate',
      name: 'ساخت',
      pipe: { transform: this.publicHelper.LocaleDate },
    },
    {
      prop: 'UpdatedDate',
      name: 'ویرایش',
      pipe: { transform: this.publicHelper.LocaleDate },
    },
    {
      prop: 'Title',
      name: 'عنوان',
    },
    {
      prop: 'Description',
      name: 'توضیحات',
    },
  ];
  loadingStatus = false; // add one more property

  closeResult: string;
  optionsSearch: ComponentOptionSearchContentModel = new ComponentOptionSearchContentModel();
  constructor(
    private toastrService: CmsToastrService,
    private router: Router,
    private publicHelper: PublicHelper,
    public smsMainApiPathService: SmsMainApiPathService,
    private modalService: NgbModal
  ) {
    this.optionsSearch.actions = { onSubmit: (model) => this.onSubmitOptionsSearch(model) };

  }
  ngOnInit() {
    this.optionsCategorySelect.actions = {
      onActionSelect: (x) => this.onActionCategorySelect(x),
    };

    this.DataGetAllContent();
  }


  onSubmitOptionsSearch(model: any) {
    this.filteModelContent.Filters = model;
    this.DataGetAllContent();
  }
  DataGetAllContent() {
    this.tableContentSelected = [];
    this.tableContentloading = true;
    this.loadingStatus = true;
    this.filteModelContent.AccessLoad = true;
    this.smsMainApiPathService.ServiceGetAll(this.filteModelContent).subscribe(
      (next) => {
        if (next.IsSuccess) {
          this.dataModelResult = next;
          this.optionsSearch.methods.setAccess(next.Access);

          this.tableContentloading = false;
        }
        this.loadingStatus = false;
      },
      (error) => {
        this.toastrService.typeError(error);
        this.tableContentloading = false;
        this.loadingStatus = false;
      }
    );
  }
  onActionbuttonNewRow() {
    if (
      this.dataModelResult != null &&
      this.dataModelResult.Access &&
      this.dataModelResult.Access.AccessAddRow
    ) {
      this.openModal(this.contentContentAdd);
    } else {
      this.toastrService.toastr.error('خطا', 'برروی خطا ');
    }
  }
  onActionbuttonEditRow() {
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
    if (this.router.url === '/sms/apipath/list') {
      this.router.navigate(['../edit'], {
        queryParams: { id: this.tableContentSelected[0].Id },
      });
    } else {
      this.router.navigate([this.router.url + '/edit'], {
        queryParams: { id: this.tableContentSelected[0].Id },
      });
    }

    // this.openModal(this.contentContentEdit);
  }
  onActionbuttonDeleteRow() { }
  onActionbuttonStatus() { }
  onActionbuttonExport() { }

  onActionbuttonReload() {
    this.DataGetAllContent();
  }
  // Open default modal
  openModal(content) {
    const options: NgbModalOptions = {
      size: 'lg',
      windowClass: 'openModalLarg',
    };
    this.modalService.open(content, options).result.then(
      (result) => {
        this.closeResult = `بسته شدن با: ${result}`;
        // this.onActionCategoryReload();
      },
      (reason) => {
        this.closeResult = `رها شدن با ${this.getDismissReason(reason)}`;
        // this.onActionCategoryReload();
      }
    );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'با فشردن ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'با کلیک کردن یک backdrop';
    } else {
      return `با: ${reason}`;
    }
  }
  onActionSetPage(model: any) {
    this.filteModelContent.CurrentPageNumber = model.offset + 1;
    this.DataGetAllContent();
  }
  onActionSort(event) {
    const sort = event.sorts[0];

    if (sort) {
      if (sort.dir === 'desc') {
        this.filteModelContent.SortType = EnumSortType.Descending;
      } else {
        this.filteModelContent.SortType = EnumSortType.Ascending;
      }
      this.filteModelContent.SortColumn = sort.prop;
    }
    this.DataGetAllContent();
  }
  onActionCategorySelect(model: SmsMainApiPathCompanyModel) {
    this.filteModelContent = new FilterModel();

    if (model && model.Id > 0) {


      const aaa = {
        PropertyName: 'LinkApiPathCompanyId',
        IntValue1: model.Id,
      };
      this.filteModelContent.Filters.push(aaa as FilterDataModel);
    }
    this.DataGetAllContent();
  }

  onActionSelect(event) {
    this.getId = event.selected[0].Id;
  }
  goToApiPathSuperSide() {
    this.router.navigate(['/sms/superSide'], { queryParams: { LinkApiPathId: this.getId } });
  }
}
