import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Page404Component } from './page404/page404.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    ForgetpwdComponent,
    HeaderComponent,
    LoginComponent,
    NavbarLeftComponent,
    Page404Component,
    LoadingComponent,
    ProfileComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ],
  exports: [
    ForgetpwdComponent,
    HeaderComponent,
    LoginComponent,
    NavbarLeftComponent,
    Page404Component,
    LoadingComponent,
    ProfileComponent,
    NavigationComponent
  ]
})
export class LayoutModule { }
