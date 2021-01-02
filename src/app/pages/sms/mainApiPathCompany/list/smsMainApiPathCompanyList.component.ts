import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {
    DatatableComponent,
    ColumnMode,
    TableColumn,
    SelectionType,
} from '@swimlane/ngx-datatable';
import {CmsToastrService} from 'src/app/core/services/base/cmsToastr.service';
import {EnumSortType, ErrorExceptionResult, FilterModel, SmsMainApiPathCompanyService} from 'ntk-cms-api';
import {Router} from '@angular/router';
import { PublicHelper } from 'src/app/core/common/helper/publicHelper';
import { ComponentOptionSearchContentModel } from 'src/app/core/models/base/componentOptionSearchContentModel';

@Component({
    selector: 'app-sms-main-api-path-company-list',
    templateUrl: './smsMainApiPathCompanyList.component.html',
    styleUrls: ['./smsMainApiPathCompanyList.component.scss'],
})
export class SmsMainApiPathCompanyListComponent implements OnInit {
    @ViewChild('contentContentAdd', {static: false})
    contentContentAdd: ElementRef;
    @ViewChild('contentContentEdit', {static: false})
    contentContentEdit: ElementRef;

    filteModelContent = new FilterModel();
    tableContentloading = false;
    tableContentSelected: Array<any> = [];
    dataModelResult: ErrorExceptionResult<any> = new ErrorExceptionResult<any>();
    dataModelResultViewModel: ErrorExceptionResult<any> = new ErrorExceptionResult<any>();
    columnMode = ColumnMode;
    selectionType = SelectionType;
    columnsContent: TableColumn[] = [
        {
            prop: 'RecordStatus',
            name: 'وضعیت',
            pipe: {transform: this.publicHelper.RecordStatus},
        },
        {
            prop: 'Id',
            name: 'شناسه',
        },
        {
            prop: 'CreatedDate',
            name: 'ساخت',
            pipe: {transform: this.publicHelper.LocaleDate},
        },
        {
            prop: 'UpdatedDate',
            name: 'ویرایش',
            pipe: {transform: this.publicHelper.LocaleDate},
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
    getId: number;
    closeResult: string;
    optionsSearch: ComponentOptionSearchContentModel = new ComponentOptionSearchContentModel();

    constructor(
        private toastrService: CmsToastrService,
        public smsMainApiPathCompanyService: SmsMainApiPathCompanyService,
        private modalService: NgbModal,
        private publicHelper: PublicHelper,
        private router: Router
    ) {
        this.optionsSearch.actions = {onSubmit: (model) => this.onSubmitOptionsSearch(model)};

    }

    ngOnInit() {
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
        this.smsMainApiPathCompanyService
            .ServiceGetAll(this.filteModelContent)
            .subscribe(
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
            this.dataModelResult == null ||
            this.dataModelResult.Access == null ||
            !this.dataModelResult.Access.AccessAddRow
        ) {
            const title = 'برروز خطا ';
            const message = 'شما دسترسی برای اضافه کردن ندارید';
            this.toastrService.toastr.error(message, title);
            return;
        }
        this.openModal(this.contentContentAdd);
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
        this.openModal(this.contentContentEdit);
    }

    onActionbuttonDeleteRow() {
        this.smsMainApiPathCompanyService.ServiceDelete(this.getId).subscribe((res) => {
            if (res.IsSuccess) {
                this.toastrService.toastr.success('رکورد مورد نطر با موفقیت حذف شد');
                this.router.navigate(['/sms/apipathcompany']);
            }
        });
    }

    onActionbuttonStatus() {
    }

    onActionbuttonExport() {
    }

    onActionbuttonReload() {
        this.DataGetAllContent();
    }

    // Open default modal
    openModal(content) {
        this.modalService.open(content).result.then(
            (result) => {
                this.closeResult = `بسته شدن با: ${result}`;
                this.DataGetAllContent();
            },
            (reason) => {
                this.closeResult = `رها شدن با ${this.getDismissReason(reason)}`;
                this.DataGetAllContent();
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

    onActionSelect(event) {
        this.getId = event.selected[0].Id;
    }

}
