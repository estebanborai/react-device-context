import DeviceContext from './context/device';

export { DeviceContextProvider } from './context/device';
export { DeviceFormat, DeviceProfile, Browser } from './service/device';
export { useCurrentBrowser, useCurrentFormat, useDeviceContext } from './hooks';

export default DeviceContext;
