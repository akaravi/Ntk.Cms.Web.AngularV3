import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsRoutingModule} from './news-routing.module';
import {NewsComponent} from './news.component';
import {ToastrService} from 'ngx-toastr';
import {TagInputModule} from 'ngx-chips';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {
    CoreEnumService,
    NewsCategoryService,
    NewsCommentService,
    NewsConfigurationService,
    NewsContentAndParameterValueService,
    NewsContentOtherInfoService,
    NewsContentParameterService,
    NewsContentParameterTypeService,
    NewsContentService,
    NewsContentSimilarService,
    NewsContentTagService,
    NewsShareMainAdminSettingService,
    NewsShareReciverCategoryService,
    NewsShareServerCategoryService
} from 'ntk-cms-api';

import {TreeviewModule} from 'ngx-treeview';
import {NewsContentEditComponent} from './content/edit/edit.component';
import {NgxPersianModule} from 'ngx-persian';
import {NewsContentAddComponent} from './content/add/add.component';
import {NewsCategoryDeleteComponent} from './category/delete/delete.component';
import {NewsCategorySelectComponent} from './category/select/select.component';
import {NewsCategoryListComponent} from './category/list/list.component';
import {NewsContentListComponent} from './content/list/list.component';
import {NewsContentListResolver} from './content/list/list.resolver';
import {NewsCategoryEditComponent} from './category/edit/edit.component';
import {CommentComponent} from './content/list/comment/comment.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from 'src/app/core/shared/shared.module';
import {CategoryResolver} from './category/category.resolver';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';


@NgModule({
    declarations: [
        NewsComponent,
        NewsContentListComponent,
        NewsContentAddComponent,
        NewsContentEditComponent,
        NewsCategoryListComponent,
        NewsCategoryEditComponent,
        NewsCategorySelectComponent,
        NewsCategoryDeleteComponent,
        CommentComponent

    ],
    imports: [
        CommonModule,
        NewsRoutingModule,
        TagInputModule,
        FormsModule,
        LeafletModule,
        ReactiveFormsModule,
        TreeviewModule.forRoot(),
        NgxPersianModule,
        SharedModule.forRoot(),
        SharedModule,
        CKEditorModule
    ],
    entryComponents: [
        NewsCategoryDeleteComponent,
        NewsCategoryEditComponent
    ],
    providers: [
        NewsCategoryService,
        NewsCommentService,
        NewsConfigurationService,
        NewsContentService,
        NewsContentAndParameterValueService,
        NewsContentOtherInfoService,
        NewsContentParameterService,
        NewsContentParameterTypeService,
        NewsContentSimilarService,
        NewsContentTagService,
        NewsShareMainAdminSettingService,
        NewsShareReciverCategoryService,
        NewsShareServerCategoryService,
        ToastrService,
        CoreEnumService,
        NewsContentListResolver,
        CategoryResolver
    ]
})
export class NewsModule {
}
