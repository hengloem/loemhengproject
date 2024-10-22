import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { AboutMeComponent } from './page/about-me/about-me.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';
import { BlogComponent } from './page/blog/blog.component';
import { ContactMeComponent } from './page/contact-me/contact-me.component';
import { EducationComponent } from './page/education/education.component';
import { ExperienceComponent } from './page/experience/experience.component';
import { PrivacyPolicyComponent } from './page/privacy-policy/privacy-policy.component';
import { SkillComponent } from './page/skill/skill.component';
import { TermsOfServiceComponent } from './page/terms-of-service/terms-of-service.component';
import { BlogPostComponent } from './page/blog-post/blog-post.component';
import { Page404Component } from './layout/page404/page404.component';

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
    component: BlogComponent,
    children: [
      {
        path: 'reading',
        component: BlogPostComponent
      }
    ]
  },
  {
    path: 'skills',
    component: SkillComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'terms-of-service',
    component: TermsOfServiceComponent
  },
  {
    path: 'tool',
    loadChildren: () => import('@shared/shared.module').then(m => m.SharedModule) // Lazy load the SharedModule
  },
  {
    path: '**',
    component: Page404Component // Catch-all route for 404 pages
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
