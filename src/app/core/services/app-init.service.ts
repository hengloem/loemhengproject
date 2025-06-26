import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { from, map, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor() { }
  
  public init(): Promise<any> {
    // Determine config file based on environment
    const configFile = this.getConfigFile();
    
    const config$ = from(fetch(configFile)).pipe(
      map(response => {
        if (!response.ok) {
          throw new Error(`Failed to load configuration from ${configFile}: ${response.statusText}`);
        }
        return response.json();
      })
    );

    return lastValueFrom(config$)
      .then((config: any) => {
        window.config = config;
        // console.log('Configuration loaded successfully:', config);
        return config;
      })
      .catch(error => {
        // console.error('App initialization failed', error);
        // Set fallback config
        this.setFallbackConfig();
        return Promise.reject(error);
      });
  }

  private getConfigFile(): string {
    // Check if we're in production (Vercel deployment)
    if (environment.production || window.location.hostname === 'loemheng.com') {
      return 'assets/config/app-config.prod.json';
    }
    
    // Local development
    return 'assets/config/app-config.local.json';
  }

  private setFallbackConfig(): void {
    const isProduction = environment.production || window.location.hostname === 'loemheng.com';
    
    window.config = {
      environment: isProduction ? 'production' : 'local',
      server: isProduction ? 'https://your-api-server.com' : 'http://localhost:8080',
      baseUrl: isProduction ? 'https://loemheng.com' : 'http://localhost:4200',
      siteName: 'Loem Heng',
      siteDescription: 'Personal portfolio and tech blog by Loem Heng',
      bloggerApiKey: '',
      bloggerApiUrl: 'https://www.googleapis.com/blogger/v3/blogs/YOUR_BLOG_ID/posts',
      googleClientId: '1088156184863-dsmpolsrntp3d21h1fntj28hnurqr4di.apps.googleusercontent.com'
    };
  }

  public isConfigLoaded(): boolean {
    return !!window.config;
  }
}