import { EnumDeviceType, EnumOperatingSystemType } from 'ntk-cms-api';

export const environment = {
  production: true,
  appVersion: 'v712demo1',
  USERDATA_KEY: 'authf649fc9a5f55',
  isMockEnabled: true,
  apiUrl: 'api',
  // apiUrl: 'mysite.com/api'
  leafletUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
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
