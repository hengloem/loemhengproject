declare var window: any;

export const environment = {
  production: true,

  // TEMP
  title: "Production Environment",
  apiUrl: "",

  get environment() {
    return window.config.environment;
  },

  get feServerUrl() {
    return window.config.feServerUrl;
  }
};
