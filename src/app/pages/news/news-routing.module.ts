import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NewsContentEditComponent} from './content/edit/edit.component';
import {NewsContentAddComponent} from './content/add/add.component';
import {NewsCategoryListComponent} from './category/list/list.component';
import {NewsContentListComponent} from './content/list/list.component';
import {NewsContentListResolver} from './content/list/list.resolver';
import {NewsComponent} from './news.component';
import {CommentComponent} from './content/list/comment/comment.component';
import {CategoryResolver} from './category/category.resolver';


const routes: Routes = [
    {
        path: '',
        component: NewsComponent,
        children: [
            {
                path: 'list',
                component: NewsContentListComponent,
                resolve: {list: NewsContentListResolver, getCategory: CategoryResolver}
            },
            {
                path: 'add',
                component: NewsContentAddComponent
            },
            {
                path: 'edit',
                component: NewsContentEditComponent
            },
            {
                path: 'comment/:id',
                component: CommentComponent
            },
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            }
        ],
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
