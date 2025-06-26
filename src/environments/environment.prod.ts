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
  production: true,

  get environment() {
    return window.config?.environment || 'production';
  },

  get server() {
    return window.config?.server || 'https://your-api-server.com';
  },

  get baseUrl() {
    return window.config?.baseUrl || 'https://loemheng.com';
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