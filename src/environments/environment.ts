declare global {
  interface Window {
    config: {
      environment: string;
      server: string;
      bloggerApiKey: string;
      bloggerApiUrl: string;
      googleClientId: string;
    };
  }
}

export const environment = {
  production: false,

  get environment() {
    return window.config.environment;
  },

  get server() {
    return window?.config.server;
  },

  get bloggerApiKey() {
    return window.config.bloggerApiKey;
  },

  get bloggerApiUrl() {
    return window.config.bloggerApiUrl;
  },

  get googleClientId() {
    return window.config.googleClientId;
  }
};
