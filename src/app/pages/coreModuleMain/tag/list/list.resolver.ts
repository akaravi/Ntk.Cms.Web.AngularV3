import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ErrorExceptionResult, FilterModel, CoreModuleTagService, CoreModuleTagModel } from 'ntk-cms-api';


@Injectable()
export class CoreModuleTagListResolver implements Resolve<ErrorExceptionResult<CoreModuleTagModel>>{
  debugger;
  filterModelContent = new FilterModel();
  constructor(private coreModuleTagService: CoreModuleTagService) { }

  resolve(): Observable<ErrorExceptionResult<CoreModuleTagModel>> {
    return this.coreModuleTagService.ServiceGetAll(this.filterModelContent);
  }
}
