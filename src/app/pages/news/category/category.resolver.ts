import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {FilterModel, NewsCategoryService} from 'ntk-cms-api';

@Injectable({
    providedIn: 'root'
})
export class CategoryResolver implements Resolve<any> {

    filteModelCategory = new FilterModel();

    constructor(public categoryService: NewsCategoryService) {
    }

    resolve(): Observable<any> {
        return this.categoryService.ServiceGetAll(this.filteModelCategory);
    }
}
