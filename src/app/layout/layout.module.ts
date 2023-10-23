import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { COMPONENTS } from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutModule { }
