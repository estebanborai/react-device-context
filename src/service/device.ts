import { MOBILE_REGEXP } from '../constants';

export type DeviceFormat = 'Desktop' | 'Mobile';

export type Browser = 'Chrome'
  | 'Edge'
  | 'EdgeChromium'
  | 'Firefox'
  | 'IE'
  | 'Opera'
  | 'Safari';

export interface DeviceProfile {
  format: DeviceFormat | null;
  browser: Browser | null;
}

class Device {
  public getDeviceProfile(): DeviceProfile {
    const format = this.scan();
    const browser = this.browser();

    return {
      format,
      browser,
    };
  }

  public makeDeviceProfile(): DeviceProfile {
    return {
      format: this.scan(),
      browser: this.browser(),
    };
  }

  private scan(): DeviceFormat {
    const basicMobileRegexp = new RegExp(MOBILE_REGEXP.BASIC);
    const commonMobileRegexp = new RegExp(MOBILE_REGEXP.COMMON);
    const improvedMobileRegexp = new RegExp(MOBILE_REGEXP.IMPROVED);

    if (basicMobileRegexp.test(navigator.userAgent)) {
      return 'Mobile';
    }

    if (commonMobileRegexp.test(navigator.userAgent)) {
      return 'Mobile';
    }

    if (improvedMobileRegexp.test(navigator.userAgent.substr(0, 4))) {
      return 'Mobile';
    }

    return 'Desktop';
  }

  private browser(): Browser | null {
    if (this.isEdgeChromiumBrowser()) {
      return 'EdgeChromium';
    }

    if (this.isChromeBrowser()) {
      return 'Chrome';
    }

    if (this.isFirefoxBrowser()) {
      return 'Firefox';
    }

    if (this.isInternetExplorerBrowser()) {
      return 'IE';
    }

    if (this.isEdgeBrowser()) {
      return 'Edge';
    }

    if (this.isOperaBrowser()) {
      return 'Opera';
    }

    return null;
  }

  private isOperaBrowser(): boolean {
    const { opera } = window;
    const { opr } = window;

    if (opera) {
      if (opera?.version()) {
        return true;
      }
    }

    if (!!opr && !!opr?.addons) {
      return true;
    }

    return false;
  }

  private isFirefoxBrowser(): boolean {
    if (typeof window.InstallTrigger !== 'undefined') {
      return true;
    }

    return false;
  }

  private isChromeBrowser(): boolean {
    if (!!window.chrome && (!!window?.chrome?.webstore || !window?.chrome?.runtime)) {
      return true;
    }

    return false;
  }

  private isInternetExplorerBrowser(): boolean {
    return /* @cc_on!@ */false || !!document.documentMode;
  }

  private isEdgeBrowser(): boolean {
    if (!this.isInternetExplorerBrowser() && !!window.StyleMedia) {
      return true;
    }

    return false;
  }

  private isEdgeChromiumBrowser(): boolean {
    if (this.isChromeBrowser() && (navigator.userAgent.indexOf('Edg') !== -1)) {
      return true;
    }

    return false;
  }
}

export default Device;
