declare var window: any;

export class DynamicEnvironment {
    get environment() {
        return window.config.environment;
    }

    get feServerUrl() {
        return window.config.feServerUrl;
    }
}