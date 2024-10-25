import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { SharedModule } from '../shared/shared.module'; // Optional: If you are using shared components
import { LayoutModule } from '../layout/layout.module'; // Optional: If you are using layout components
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { SkillComponent } from './skill/skill.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { CoreModule } from '@app/core/core.module'; // Optional: If you are using core services

@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    PortfolioComponent,
    ContactMeComponent,
    BlogComponent,
    BlogPostComponent,
    SkillComponent,
    EducationComponent,
    ExperienceComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    LayoutModule,   // Optional: Use only if needed
    SharedModule,   // Optional: Use only if needed
    CoreModule      // Optional: Use only if needed
  ]
})
export class PageModule { }
