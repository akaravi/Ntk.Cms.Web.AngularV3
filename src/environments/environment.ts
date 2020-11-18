import { EnumDeviceType, EnumOperatingSystemType } from 'ntk-cms-api';

export const environment = {
  production: false,
  appVersion: 'v712demo1',
  USERDATA_KEY: 'authf649fc9a5f55',
  isMockEnabled: true,
  apiUrl: 'api',
  
  cmsServerConfig: {
    configApiRetry: 1,
    configApiServerPath: 'https://apicms.ir/api/v1/',
    // configApiServerPath: 'http://localhost:2390/api/v1/',
    configMvcServerPath: 'https://oco.ir',
    configCpanelImages: '/cpanelv1/images/',
    configPathFileByIdAndName: 'https://oco.ir/files/',
    configRouteThumbnails: 'https://oco.ir/imageThumbnails/',
    configRouteUploadFileContent: 'https://apicms.ir/api/v1/FileContent/upload/',
  },
  cmsUiConfig: {
    Pathlogin: '/auth/login',
    Pathlogout: '/auth/logout',
    PathRegistery: '/auth/registery',
    PathSelectSite: '/core/site/select',
    Pathdashboard: '/dashboard/dashboard1',
  },
  cmsTokenConfig: {
    SecurityKey: '123456789',
    ClientMACAddress: '',
    OSType: EnumOperatingSystemType.Windows,
    DeviceType: EnumDeviceType.WebSite,
    PackageName: '',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
