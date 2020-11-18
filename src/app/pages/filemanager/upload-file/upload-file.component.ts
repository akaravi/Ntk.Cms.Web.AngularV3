import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Input,
  OnDestroy,
} from '@angular/core';
import { FlowDirective, Transfer } from '@flowjs/ngx-flow';
import { ComponentOptionFileUploadModel } from 'app/@cms/cmsComponentModels/files/componentOptionNewsCategoryModel';
import { environment } from 'environments/environment';
import { Subscription } from 'rxjs';

const URL =
  environment.cmsServerConfig.configApiServerPath + 'FileContent/Upload/';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadFileComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input()
  set options(model: ComponentOptionFileUploadModel) {
    this.privateOption = model;
  }
  get options(): ComponentOptionFileUploadModel {
    return this.privateOption;
  }
  private privateOption: ComponentOptionFileUploadModel = new ComponentOptionFileUploadModel();

  @ViewChild('flow', { static: false })
  flow: FlowDirective;
  autoUploadSubscription: Subscription;
  flowOption: flowjs.FlowOptions;
  uploadViewImage = false;
  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit() {
    this.flowOption = {
      target: URL,
      query: function (flowFile, flowChunk) {
        if (flowFile.myparams) {
          return flowFile.myparams;
        }
        flowFile.myparams = {
          Filename: flowChunk.fileObj.name,
          Identifier: flowChunk.fileObj.uniqueIdentifier,
          TotalChunks: flowChunk.fileObj.chunks.length,
        };
        return flowFile.myparams;
      },
      allowDuplicateUploads: false,
    };
  }

  ngAfterViewInit() {
    this.autoUploadSubscription = this.flow.events$.subscribe((event) => {
      switch (event.type) {
        case 'filesSubmitted':
          return this.flow.upload();
        case 'fileSuccess':
          return this.fileSuccess(event);
        case 'newFlowJsInstance':
          return this.cd.detectChanges();
      }
    });
  }
  fileSuccess(event: any) {
    if (event && event.event) {
      if (
        this.privateOption &&
        this.privateOption.actions &&
        this.privateOption.actions.onActionSelect
      ) {
        this.privateOption.actions.onActionSelect({
          fileName: event.event[0].name,
          fileKey: event.event[1],
        });
        this.privateOption.data = {
          fileName: event.event[0].name,
          fileKey: event.event[1],
        };
      }
    }
  }
  trackTransfer(transfer: Transfer) {
    return transfer.id;
  }

  ngOnDestroy() {
    this.autoUploadSubscription.unsubscribe();
  }
}
