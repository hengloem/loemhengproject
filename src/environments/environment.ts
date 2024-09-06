declare global {
  interface Window {
    config: {
      environment: string;
      server: string;
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
  }
};
