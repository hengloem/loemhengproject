import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { COMPONENTS } from './components';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    LayoutModule,
    SharedModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class PageModule { }
