import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guard/auth.guard';
import { NoAuthGuard } from './guard/no-auth.guard';
import { throwIfAlreadyLoaded } from './guard/module-import.guard';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { VideoService } from './services/video.service';
import { GridGalleryService } from './services/grid-gallery.service';
import { ContactFormService } from './services/contact-form.service';
import { HoverEffectDirective } from './directives/hover-effect.directive';

@NgModule({
  declarations: [
    SafeUrlPipe,
    HoverEffectDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard,
    NoAuthGuard,
    VideoService,
    GridGalleryService,
    ContactFormService
  ],
  exports: [
    SafeUrlPipe
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
