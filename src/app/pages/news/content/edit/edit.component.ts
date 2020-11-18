import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CoreEnumService, EnumModel, ErrorExcptionResult, FormInfoModel, NewsContentModel, NewsContentService} from 'ntk-cms-api';
import {FormControl, FormGroup} from '@angular/forms';
import * as Leaflet from 'leaflet';
import {environment} from '../../../../../environments/environment';
import {icon} from 'leaflet';
import {ActivatedRoute} from '@angular/router';
import {PublicHelper} from 'src/app/core/cmsCommon/helper/publicHelper';
import {CmsToastrService} from 'src/app/core/cmsService/base/cmsToastr.service';

@Component({
  selector: 'app-news-content-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class NewsContentEditComponent implements OnInit, AfterViewInit {

  // @ViewChild('fromDate', { static: false }) fromDate: ElementRef;
  // @ViewChild('expireDate', { static: false }) expireDate: ElementRef;

  dataModelResult: ErrorExcptionResult<NewsContentModel> = new ErrorExcptionResult<NewsContentModel>();
  dataModelEnumRecordStatusResult: ErrorExcptionResult<EnumModel> = new ErrorExcptionResult<EnumModel>();

  loadingStatus = false;
  dataModel: NewsContentModel = new NewsContentModel();
  linkCategoryId: number;
  formInfo: FormInfoModel = new FormInfoModel();
  singUpContentForm: FormGroup;
  items = ['Javascript', 'Typescript'];
  theMarker: any;
  map: Leaflet.Map;
  model: any;
  lat: any;
  lon: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public coreEnumService: CoreEnumService,
    private newsContentService: NewsContentService,
    private toasterService: CmsToastrService
  ) {
    import('../../../../../assets/js/wizard-4').then();
    import('../../../../../assets/js/ckeditor-classic.js').then();
  }

  id = 0;

  ngOnInit(): void {
    this.singUpContentForm = new FormGroup({
      status: new FormControl(this.dataModel.RecordStatus),
      title: new FormControl(this.dataModel.Title),
      description: new FormControl(this.dataModel.Description),
      tag: new FormControl(null),
      keyWords: new FormControl(null),
      ckeditor: new FormControl(this.dataModel.body),
      fromDate: new FormControl(this.dataModel.CreatedDate),
      expireDate: new FormControl(this.dataModel.ExpireDate)
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = +params.id || 0;
    });
    if (this.id === 0) {
      this.toasterService.typeErrorEditRowIsNull();
      return;
    }
    this.getEnumRecordStatus();
    this.DataGetOneContent();

  }


  ngAfterViewInit(): void {
    if (this.dataModel.geolocationlatitude !== undefined && this.dataModel.geolocationlongitude !== undefined) {
      this.map = Leaflet.map('map', {
        center: [this.dataModel.geolocationlatitude, this.dataModel.geolocationlongitude],
        zoom: 16
      });
    } else {
      this.map = Leaflet.map('map', {
        center: [32.6539, 51.6660],
        zoom: 16
      });
    }

    Leaflet.tileLayer(environment.leafletUrl).addTo(this.map);
    if (this.dataModel.geolocationlatitude !== undefined && this.dataModel.geolocationlongitude !== undefined) {
      this.theMarker = Leaflet.marker([this.dataModel.geolocationlatitude,
        this.dataModel.geolocationlongitude]).addTo(this.map);
    }
    this.map.on('click', (e) => {
      // @ts-ignore
      this.lat = e.latlng.lat;
      // @ts-ignore
      this.lon = e.latlng.lng;
      if (this.theMarker !== undefined) {
        this.map.removeLayer(this.theMarker);
      }
      this.theMarker = Leaflet.marker([this.lat, this.lon]).addTo(this.map);
    });
  }

  getEnumRecordStatus(): void {
    this.coreEnumService.ServiceEnumRecordStatus().subscribe((res) => {
      this.dataModelEnumRecordStatusResult = res;
    });
  }

  onFormSubmit(): void {
    if (this.id === 0) {
      this.toasterService.typeErrorEditRowIsNull();
      return;
    }
    if (this.singUpContentForm.valid) {
      this.formInfo.formAllowSubmit = false;
      this.DataEditContent();
    }
  }

  DataGetOneContent(): void {
    if (this.id === 0) {
      this.toasterService.typeErrorEditRowIsNull();
      return;
    }

    this.formInfo.formAlert = 'در دریافت ارسال اطلاعات از سرور';
    this.formInfo.formError = '';
    this.loadingStatus = true;
    this.newsContentService.ServiceGetOneById(this.id).subscribe(
      (next) => {
        this.dataModel = next.Item;

        if (next.IsSuccess) {
          this.dataModel = next.Item;
          this.formInfo.formAlert = '';
        } else {
          this.toasterService.typeErrorGetOne(next.ErrorMessage);
        }
        this.loadingStatus = false;
      },
      (error) => {
        this.toasterService.typeError(error);
        this.loadingStatus = false;
      }
    );
  }

  DataEditContent(): void {
    this.dataModel.Title = this.singUpContentForm.get('title').value;
    this.dataModel.Description = this.singUpContentForm.get('description').value;
    // this.dataModel.fromDate = this.fromDate.nativeElement.value;
    // this.dataModel.ExpireDate = this.expireDate.nativeElement.value;
    this.dataModel.RecordStatus = this.singUpContentForm.get('status').value;
    this.dataModel.body = this.singUpContentForm.get('ckeditor').value;
    this.dataModel.geolocationlatitude = this.lat;
    this.dataModel.geolocationlongitude = this.lon;
    // this.dataModel.Id = this.newsNetwork.model.Id;

    if (this.linkCategoryId <= 0) {
      this.toasterService.toastr.error(
        'دسته بندی را مشخص کنید',
        'دسته بندی اطلاعات مشخص نیست'
      );
      return;
    }
    this.dataModel.linkCategoryId = 30383;
    this.formInfo.formAlert = 'در حال ارسال اطلاعات به سرور';
    this.formInfo.formError = '';
    this.loadingStatus = true;
    this.newsContentService
      .ServiceEdit(this.dataModel)
      .subscribe(
        (next) => {
          this.loadingStatus = false;
          this.formInfo.formAllowSubmit = !next.IsSuccess;
          this.dataModelResult = next;
          if (next.IsSuccess) {
            this.formInfo.formAlert = 'ویرایش با موفقت انجام شد';
            this.toasterService.typeSuccessEdit();

          } else {

            this.toasterService.typeErrorEdit(next.ErrorMessage);
          }
        },
        (error) => {
          this.loadingStatus = false;
          this.formInfo.formAllowSubmit = true;

          const title = 'برروی خطا در دریافت اطلاعات';
          this.toasterService.typeError(error);
        }
      );
  }

  onValueChange(model: any): any {
    return model.value;
  }
}
