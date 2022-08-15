import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { CertificationComponent } from './components/certification/certification.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AuthorComponent } from './components/author/author.component';
import { ServiceComponent } from './components/service/service.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutMeComponent,
    BlogsComponent,
    AuthorComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
