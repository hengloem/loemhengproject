declare global {
  interface Window {
    config: {
      environment: string;
      server: string;
      baseUrl: string;
      siteName: string;
      siteDescription: string;
      bloggerApiKey: string;
      bloggerApiUrl: string;
      googleClientId: string;
    };
  }
}

export const environment = {
  production: false,

  get environment() {
    return window.config?.environment || 'local';
  },

  get server() {
    return window.config?.server || 'http://localhost:8080';  
  },

  get baseUrl() {
    return window.config?.baseUrl || 'http://localhost:4200';
  },

  get siteName() {
    return window.config?.siteName || 'Loem Heng';
  },

  get siteDescription() {
    return window.config?.siteDescription || 'Personal portfolio and tech blog';
  },

  get bloggerApiKey() {
    return window.config?.bloggerApiKey || '';
  },

  get bloggerApiUrl() {
    return window.config?.bloggerApiUrl || '';
  },

  get googleClientId() {
    return window.config?.googleClientId || '';
  }
};