import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/components/home/home.component';
import { Page404Component } from './layout/components';
import { AboutMeComponent } from './page/components/about-me/about-me.component';
import { PortfolioComponent } from './page/components/portfolio/portfolio.component';
import { BlogComponent } from './page/components/blog/blog.component';
import { ContactMeComponent } from './page/components/contact-me/contact-me.component';
import { BlogPostComponent } from './page/components';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutMeComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'contact',
    component: ContactMeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'sblog-post',
    component: BlogPostComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
