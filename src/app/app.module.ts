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

export function InitApp(appLoadService: AppInitService) {
  return () => appLoadService.init();
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

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
    StoreModule.forRoot({}, {})
  ],
  providers: [
    AppInitService,
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