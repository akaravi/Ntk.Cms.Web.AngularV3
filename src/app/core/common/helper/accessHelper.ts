import {ErrorExceptionResult} from 'ntk-cms-api';


export class AccessHelper {
  constructor() {}

  AccessDeleteRow(model: ErrorExceptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return model.Access.AccessDeleteRow;
  }
  AccessWatchRow(model: ErrorExceptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return false; // return model?.Access?.AccessWatchRow;
  }
  AccessEditRow(model: ErrorExceptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return model.Access.AccessEditRow;
  }
  AccessAddRow(model: ErrorExceptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return  model.Access.AccessAddRow;
  }
  AccessRowInPanelDemo(model: ErrorExceptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return model.Access.AccessRowInPanelDemo;
  }
  AccessRowWatchInSharingCategory(model: ErrorExceptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return model.Access.AccessRowWatchInSharingCategory;
  }
  AccessWatchRowOtherSiteId(model: ErrorExceptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return false;
  }
  AccessWatchRowOtherCreatedBy(model: ErrorExceptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return model.Access.AccessWatchRowOtherCreatedBy;
  }
  AccessEditRowOtherSiteId(model: ErrorExceptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return model.Access.AccessEditRowOtherSiteId;
  }
  AccessEditRowOtherCreatedBy(model: ErrorExceptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return model.Access.AccessEditRowOtherCreatedBy;
  }
  AccessDeleteRowOtherCreatedBy(model: ErrorExceptionResult<any>): boolean {
    if (!model) { return false; }
    if (!model.Access) { return false; }
    return model.Access.AccessDeleteRowOtherCreatedBy;
  }
}
