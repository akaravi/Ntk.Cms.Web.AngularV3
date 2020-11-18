import {Component, OnInit} from '@angular/core';
import {FilterDataModel, SmsMainApiPathSuperSederService} from 'ntk-cms-api';
import {FilterModel} from 'ntk-cms-api';
import {ActivatedRoute} from '@angular/router';
import {ColumnMode, SelectionType, TableColumn} from '@swimlane/ngx-datatable';

@Component({
    selector: 'app-smsMainApiPathSuperSederList',
    templateUrl: './smsMainApiPathSuperSederList.component.html',
    styleUrls: ['./smsMainApiPathSuperSederList.component.scss']
})
export class SmsMainApiPathSuperSederListComponent implements OnInit {

    data: any;
    columnMode = ColumnMode;
    selectionType = SelectionType;
    columnsContent: TableColumn[] = [
        {
            prop: 'RecordStatus',
            name: 'وضعیت',
        },
        {
            prop: 'Id',
            name: 'شناسه',
        },
        {
            prop: 'CreatedDate',
            name: 'ساخت',
        },
        {
            prop: 'UpdatedDate',
            name: 'ویرایش',
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
    tableContentloading = false;
    tableContentSelected: Array<any> = [];

    constructor(private smsMainApiPathSuperSederService: SmsMainApiPathSuperSederService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        const model = new FilterModel()
        model.Filters = [];
        const filter = new FilterDataModel();
        filter.PropertyName = 'LinkApiPathId';
        filter.Value = this.activatedRoute.snapshot.params.id;
        model.Filters.push(filter);
        this.smsMainApiPathSuperSederService.ServiceGetAll(model).subscribe((res) => {
           this.data = res;
        });
    }

}
