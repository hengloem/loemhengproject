import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guard/auth.guard';
import { NoAuthGuard } from './guard/no-auth.guard';
import { throwIfAlreadyLoaded } from './guard/module-import.guard';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    SafeUrlPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard,
    NoAuthGuard
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
