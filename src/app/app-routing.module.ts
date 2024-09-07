import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { AboutMeComponent } from './page/about-me/about-me.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';
import { BlogComponent } from './page/blog/blog.component';
import { ContactMeComponent } from './page/contact-me/contact-me.component';
import { BlogPostComponent } from './page/blog-post/blog-post.component';
import { Page404Component } from './layout/page404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactMeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-post', component: BlogPostComponent },
  { path: '**', component: Page404Component } // single wildcard for 404 page
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
