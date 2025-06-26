import { NgsRevealModule } from 'ngx-scrollreveal';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';

import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppInitService } from './core/services/app-init.service';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { PageModule } from './page/page.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { MathToolsModule } from './math-tools/math-tools.module';
import { DevToolsModule } from './dev-tools/dev-tools.module';
import { SeoService } from './core/services/seo.service';
import { SchemaService } from './core/services/schema.service';

/**
 * Factory function to initialize the application.
 * This function is called during the app initialization phase.
 * It uses the AppInitService to perform necessary initializations.
 *
 * @param appInitService - The service responsible for app initialization.
 * @returns A function that returns a Promise resolving when initialization is complete.
 */
export function InitApp(appInitService: AppInitService): () => Promise<any> {
  return (): Promise<any> => {
    return appInitService.init();
  };
}

/**
 * Factory function to create a TranslateHttpLoader instance.
 * This loader is used to load translation files over HTTP.
 *
 * @param http - The HttpClient instance used to make HTTP requests.
 * @returns A new instance of TranslateHttpLoader.
 */
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

/**
 * Custom MissingTranslationHandler that returns the key of the missing translation.
 * This is useful for debugging purposes, allowing developers to see which keys are missing.
 */
export class TranslateHandler implements MissingTranslationHandler {
  handle(params: any) {
    return params.key;
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    LayoutModule,
    CoreModule,
    SharedModule,
    PageModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MathToolsModule,
    DevToolsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:5000'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false,
      missingTranslationHandler: [{
        provide: MissingTranslationHandler, 
        useClass: TranslateHandler
      }]
    }),
    StoreModule.forRoot({}, {}),
    NgsRevealModule
  ],
  providers: [
    AppInitService,
    SeoService,
    SchemaService,
    {
      provide: APP_INITIALIZER,
      useFactory: InitApp,
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }