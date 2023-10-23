import { AboutMeComponent } from "./about-me/about-me.component";
import { BlogPostComponent } from "./blog-post/blog-post.component";
import { BlogComponent } from "./blog/blog.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";

export const COMPONENTS = [
    HomeComponent,
    AboutMeComponent,
    PortfolioComponent,
    ContactMeComponent,
    BlogComponent,
    BlogPostComponent
];

export * from "./about-me/about-me.component";
export * from "./blog-post/blog-post.component";
export * from "./blog/blog.component";
export * from "./contact-me/contact-me.component";
export * from "./home/home.component";
export * from "./portfolio/portfolio.component";