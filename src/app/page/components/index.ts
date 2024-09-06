// Centralized component imports
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogComponent } from './blog/blog.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

// Export the COMPONENTS array (typed)
export const COMPONENTS: any[] = [
  HomeComponent,
  AboutMeComponent,
  PortfolioComponent,
  ContactMeComponent,
  BlogComponent,
  BlogPostComponent,
];

// Export individual components for specific use cases
export { AboutMeComponent } from './about-me/about-me.component';
export { BlogPostComponent } from './blog-post/blog-post.component';
export { BlogComponent } from './blog/blog.component';
export { ContactMeComponent } from './contact-me/contact-me.component';
export { HomeComponent } from './home/home.component';
export { PortfolioComponent } from './portfolio/portfolio.component';
