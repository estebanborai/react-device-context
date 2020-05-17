# Changelog
All notable changes to this project will be documented in this file.

## [Unreleased]

## [0.1.0] - 2020-05-17
### Added
  - Support to detect current browser.
  - Support for the following browsers:
    - `Edge`
    - `EdgeChromium`
    - `Firefox`
    - `IE`
    - `Opera`
    - `Safari`
  - Support to detect current device format.
  - The following formats are supported:
    - `Desktop`
    - `Mobile`
  - Implement `DeviceContextProvider`

## [0.2.0] - 2020-05-17
### Added
  - Implement `useCurrentBrowser`, `useCurrentFormat` and `useIsMobile` hooks.
### Removed
  - Remove format `Tablet`.
### Fix
  - Remove `.eslintrc` from tarball.
