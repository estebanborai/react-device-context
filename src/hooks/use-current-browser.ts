import { useRef } from 'react';
import useDeviceContext from './use-device-context';
import { Browser } from '../service/device';

function useCurrentBrowser(): Browser | null {
  const deviceContext = useDeviceContext();
  const { current: currentBrowser } = useRef(deviceContext.deviceProfile?.browser);

  return currentBrowser as Browser | null;
}

export default useCurrentBrowser;
