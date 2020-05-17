import { useRef } from 'react';
import useDeviceContext from './use-device-context';
import { DeviceFormat } from '../service/device';

function useCurrentFormat(): DeviceFormat | null {
  const deviceContext = useDeviceContext();
  const { current: currentFormat } = useRef(deviceContext.deviceProfile?.format);

  return currentFormat as DeviceFormat | null;
}

export default useCurrentFormat;
