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

First, you must wrap your application root component with the `DeviceContextProvider`:

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

## Contributions
Any contribution is welcome, feel free to open an issue or a pull request.
A [changelog](https://github.com/estebanborai/react-device-context/blob/master/README.md) is beign kept in order to keep track of every change for each release, refer to [keep-a-changelog](https://keepachangelog.com/en/1.0.0/) for guiderlines.

## License
Licensed under the MIT License.
