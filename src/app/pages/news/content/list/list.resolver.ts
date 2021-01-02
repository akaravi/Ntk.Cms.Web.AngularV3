import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ErrorExceptionResult, FilterModel, NewsContentService, NewsContentModel } from 'ntk-cms-api';


@Injectable()
export class NewsContentListResolver implements Resolve<ErrorExceptionResult<NewsContentModel>>{
  debugger;
  filterModelContent = new FilterModel();
  constructor(private newsContentService: NewsContentService) { }

  resolve(): Observable<ErrorExceptionResult<NewsContentModel>> {
    return this.newsContentService.ServiceGetAll(this.filterModelContent);
  }
}
