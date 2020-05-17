import { useRef } from 'react';
import useDeviceContext from './use-device-context';

function useIsMobile(): boolean | null {
  const deviceContext = useDeviceContext();
  const { current: currentFormat } = useRef(deviceContext.deviceProfile?.format);

  return currentFormat === 'Mobile';
}

export default useIsMobile;
