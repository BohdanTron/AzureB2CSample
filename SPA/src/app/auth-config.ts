import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

export const b2cPolicies = {
  names: {
    signUpSignIn: "B2C_1_susi",
    resetPassword: "B2C_1_reset_password",
    editProfile: "B2C_1_edit_profile"
  },
  authorities: {
    signUpSignIn: {
      authority: "https://btronb2c.b2clogin.com/btronb2c.onmicrosoft.com/B2C_1_susi"
    },
    resetPassword: {
      authority: "https://btronb2c.b2clogin.com/btronb2c.onmicrosoft.com/B2C_1_reset_password"
    },
    editProfile: {
      authority: "https://btronb2c.b2clogin.com/btronb2c.onmicrosoft.com/B2C_1_edit_profile"
    }
  },
  authorityDomain: "btronb2c.b2clogin.com"
};


export const msalConfig: Configuration = {
  auth: {
    clientId: '4edb9a64-be37-4fb6-93df-172b1b897f6a',
    authority: b2cPolicies.authorities.signUpSignIn.authority,
    knownAuthorities: [b2cPolicies.authorityDomain],
    redirectUri: '/',
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage,
    storeAuthStateInCookie: isIE,
  },
  system: {
    loggerOptions: {
      loggerCallback: (logLevel, message, containsPii) => {
        console.log(message);
      },
      logLevel: LogLevel.Verbose,
      piiLoggingEnabled: false
    }
  }
}

export const protectedResources = {
  api: {
    endpoint: "https://localhost:7027/WeatherForecast",
    scopes: ["https://btronb2c.onmicrosoft.com/my-tasks-api/tasks.read"],
    failingEndpoint: "https://localhost:7027/WeatherForecast/fail"
  },
}
export const loginRequest = {
  scopes: []
};