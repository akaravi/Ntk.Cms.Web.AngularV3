import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ErrorExcptionResult, FilterModel, CoreModuleTagService, CoreModuleTagModel } from 'ntk-cms-api';


@Injectable()
export class CoreModuleTagListResolver implements Resolve<ErrorExcptionResult<CoreModuleTagModel>>{
  debugger;
  filterModelContent = new FilterModel();
  constructor(private coreModuleTagService: CoreModuleTagService) { }

  resolve(): Observable<ErrorExcptionResult<CoreModuleTagModel>> {
    return this.coreModuleTagService.ServiceGetAll(this.filterModelContent);
  }
}
