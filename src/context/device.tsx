import React, { createContext, useRef } from 'react';
import DeviceService, { DeviceProfile } from '../service/device';

export interface IDeviceContext {
  deviceProfile: DeviceProfile | null;
}

export interface DeviceContextProps {
  children: JSX.Element | JSX.Element[];
}

const DeviceContext = createContext<IDeviceContext>({
  deviceProfile: null,
});

export function DeviceContextProvider(props: DeviceContextProps): JSX.Element {
  const { current: deviceService } = useRef(new DeviceService());
  const { current: deviceProfile } = useRef(deviceService.makeDeviceProfile());

  const value: IDeviceContext = {
    deviceProfile,
  };

  return (
    <DeviceContext.Provider value={value}>
      {props.children}
    </DeviceContext.Provider>
  );
}

DeviceContext.displayName = 'DeviceContext';

export default DeviceContext;
