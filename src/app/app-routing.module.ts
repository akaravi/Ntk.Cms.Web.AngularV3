import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmsAuthGuard } from './core/services/core/cmsAuthGuard.service';
import { CmsAuthGuardChild } from './core/services/core/cmsAuthGuardChild.service';


export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./modules/errors/errors.module').then((m) => m.ErrorsModule),
  },
  {
    path: 'core',
    canActivate: [CmsAuthGuard],
    loadChildren: () =>
      import('./pages/core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'news',
    canActivate: [CmsAuthGuard],
    loadChildren: () =>
      import('./pages/news/news.module').then((m) => m.NewsModule),
  },
  {
    path: '',
    canActivate: [CmsAuthGuard],
    canActivateChild: [CmsAuthGuardChild],
    loadChildren: () =>
      import('./pages/layout.module').then((m) => m.LayoutModule),
  },
  
  // بعد که پروزه کامل شد فعال شود
  // { path: '**', redirectTo: 'errors/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
