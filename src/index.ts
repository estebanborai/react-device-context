import DeviceContext from './context/device';

export {
  useCurrentBrowser, useCurrentFormat, useDeviceContext, useIsMobile,
} from './hooks';

export { DeviceContextProvider } from './context/device';
export { DeviceFormat, DeviceProfile, Browser } from './service/device';

export default DeviceContext;
