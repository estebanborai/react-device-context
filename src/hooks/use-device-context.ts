import { useContext } from 'react';
import DeviceContext, { IDeviceContext } from '../context/device';

function useDeviceContext(): IDeviceContext {
  const deviceContext = useContext<IDeviceContext>(DeviceContext);

  return deviceContext;
}

export default useDeviceContext;
