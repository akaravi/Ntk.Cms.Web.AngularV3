import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ErrorExcptionResult, FilterModel, NewsContentService, NewsContentModel } from 'ntk-cms-api';


@Injectable()
export class NewsContentListResolver implements Resolve<ErrorExcptionResult<NewsContentModel>>{
  debugger;
  filterModelContent = new FilterModel();
  constructor(private newsContentService: NewsContentService) { }

  resolve(): Observable<ErrorExcptionResult<NewsContentModel>> {
    return this.newsContentService.ServiceGetAll(this.filterModelContent);
  }
}
