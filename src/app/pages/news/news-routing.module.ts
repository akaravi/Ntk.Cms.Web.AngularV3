import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NewsContentEditComponent} from './content/edit/edit.component';
import {NewsContentAddComponent} from './content/add/add.component';
import {NewsCategoryListComponent} from './category/list/list.component';
import {NewsContentListComponent} from './content/list/list.component';
import {NewsContentListResolver} from './content/list/list.resolver';
import {NewsComponent} from './news.component';
import {CommentComponent} from './content/list/comment/comment.component';
import {ListComponent} from '../../modules/material/layout/list/list.component';


const routes: Routes = [
  {
    path: 'news',
    component: NewsComponent,
    children: [
      {
        path: 'list/add',
        component: NewsContentAddComponent
      },
      {
        path: 'list/edit',
        component: NewsContentEditComponent
      },
      {
        path: 'list/comment/:id',
        component: CommentComponent
      },
    ],
  },
  {
    path: 'list',
    component: ListComponent,
    resolve: {list: NewsContentListResolver}
  },
  // {
  //   path: 'category',
  //   component: NewsCategoryListComponent
  // },
  // {
  //   path: 'content/add',
  //   component: NewsContentAddComponent
  // },
  // {
  //   path: 'content/edit',
  //   component: NewsContentEditComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
