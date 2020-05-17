<div align="center">
  <img 
    src="https://raw.githubusercontent.com/estebanborai/react-device-context/master/docs/reactjs.png"
    height="120"
    width="120"
  />
  <h1>react-device-context</h1>
  <span>ReactJS Context to detect current device details</span>
</div>

## Description

`react-device-context` is a ReactJS context module for exposing [User Agent](https://en.wikipedia.org/wiki/User_agent) details to be accesible around the application.

## Installation
```sh
npm install react-device-context
```

## Usage

First, you must wrap your application root component with the `DeviceContextProvider`

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { DeviceContextProvider } from 'react-device-context';

const App = (): JSX.Element => (
  <DeviceContextProvider>
    {/* Other Components */}
  </DeviceContextProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

When your application is wrapped with the `DeviceContextProvider`, you will be able to consume the API.

## API

- Types
  - [`type Browser`]()
  - [`type DeviceFormat`]()
- Hooks
  - [`useCurrentBrowser`]()
  - [`useCurrentFormat`]()
  - [`useDeviceContext`]()
  - [`useIsMobile`]()
- Providers
  - [`DeviceContextProvider`]()

### `type Browser`
The browser type enumerates the browsers supported by this module.
Currently the module supports the following browsers:

Browser | Value
------------ | -------------
Chrome | `'Chrome'`
Edge | `'Edge'`
Edge Multiplatform | `'EdgeChromium'`
Firefox | `'Firefox'`
Internet Explorer | `'IE'`
Opera | `'Opera'`
Safari | `'Safari'`

Supported browsers with its corresponding value from the `Browser` type.

```tsx
import React from 'react';
import { useCurrentBrowser } from 'react-device-context';

function App(): JSX.Element {
  const currentBrowser = useCurrentBrowser();

  if (currentBrowser === 'Firefox') {
    return <p>You are on firefox</p>;
  } else {
    return <p>{ currentBrowser }</p>;
  }
}
```

### DeviceFormat
`DeviceFormat` refers to the device type. Current supported devices are `Desktop` and `Mobile`.

### Hooks

### `useCurrentBrowser() => Browser | null`
`useCurrentBrowser` hook returns the current browser as a `Browser` type value if the browser is
supported. Otherwise returns `null`.

### `useCurrentFormat() => DeviceFormat | null`
`useCurrentFormat` hook returns the current device format as a `Format` type value.

### `useDeviceContext() => Context<IDeviceContext>`
`useDeviceContext` exposes the DeviceContext interface.
The `DeviceContext` interface has only one member which is the `deviceProfile`, which is used by `useCurrentBrowser` and `useCurrentFormat`
under the hood.

`deviceProfile` implements the `DeviceProfile` interface which has the following members:

Property | Type
------------ | -------------
format | `DeviceFormat | null`
browser | `Browser | null`

### `useIsMobile() => boolean`
A hook that returns `true` if the current instance is running in a mobile device, otherwise returns `false`.

### Providers

### `<DeviceContextProvider>`
The `DeviceContextProvider` is the provider for the main context of this module, its recommended to wrap your application with this provider
in order to consume the API.

## Contributions
Any contribution is welcome, feel free to open an issue or a pull request.
A [changelog](https://github.com/estebanborai/react-device-context/blob/master/README.md) is beign kept in order to keep track of every change for each release, refer to [keep-a-changelog](https://keepachangelog.com/en/1.0.0/) for guiderlines.

## License
Licensed under the MIT License.
