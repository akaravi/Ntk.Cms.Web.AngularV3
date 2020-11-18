import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {
  AuthRenewTokenModel,
  CoreAuthService,
  CoreSiteService,
  ErrorExcptionResult,
  FilterModel,
} from 'ntk-cms-api';
import { CmsToastrService } from 'src/app/services/base/cmsToastr.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-cms-site-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class CoreSiteSelectComponent implements OnInit, OnDestroy {
  subManager = new Subscription();
  filteModel = new FilterModel();
  dataModel: ErrorExcptionResult<any>;
  constructor(
    private coreAuthService: CoreAuthService,
    private coreSiteService: CoreSiteService,
    private toastrService: CmsToastrService,
    private router: Router,
  ) {}
  ngOnDestroy() {
    this.subManager.unsubscribe();
  }

  ngOnInit() {
    this.CoreSiteGetAll();
  }
  CoreSiteGetAll() {
    this.subManager.add(
      this.coreSiteService.ServiceGetAll(this.filteModel).subscribe(
        (next) => {
          if (next.IsSuccess) {
            this.dataModel = next;
            this.toastrService.toastr.info('اطلاعات دریافت شد', 'توجه');
          }
        },
        (error) => {
          this.toastrService.typeError(error);
        }
      )
    );
  }
  trackByFn() {}
  clickSelectSite(model: any) {
    let AuthModel: AuthRenewTokenModel;
    AuthModel = new AuthRenewTokenModel();
    AuthModel.SiteId = model['Id'];
    this.subManager.add(
      this.coreAuthService.ServiceRenewToken(AuthModel).subscribe(
        (next) => {
          if (next.IsSuccess) {
            this.router.navigate([environment.cmsUiConfig.Pathdashboard]);
          }
        },
        (error) => {
          this.toastrService.typeError(error);
        }
      )
    );
  }
  onActionAddFirstSite(model: ErrorExcptionResult<any>) {
    if (model.IsSuccess) {
      let AuthModel: AuthRenewTokenModel;
      AuthModel = new AuthRenewTokenModel();
      AuthModel.SiteId = model['Id'];
      this.subManager.add(
        this.coreAuthService.ServiceRenewToken(AuthModel).subscribe(
          (next) => {
            if (next.IsSuccess) {
              this.router.navigate([environment.cmsUiConfig.Pathdashboard]);
            }
          },
          (error) => {
            this.toastrService.typeError(error);
          }
        )
      );
    }
  }
}
