import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guard/auth.guard';
import { NoAuthGuard } from './guard/no-auth.guard';
import { throwIfAlreadyLoaded } from './guard/module-import.guard';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { ContactFormService } from './services/contact-form.service';
import { HoverEffectDirective } from './directives/hover-effect.directive';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

@NgModule({
  declarations: [
    SafeUrlPipe,
    HoverEffectDirective,
    EllipsisPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard,
    NoAuthGuard,
    ContactFormService
  ],
  exports: [
    SafeUrlPipe,
    EllipsisPipe
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
