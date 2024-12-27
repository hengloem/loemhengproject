import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    HeaderComponent,
    Page404Component,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    Page404Component,
    NavigationComponent
  ]
})
export class LayoutModule { }
