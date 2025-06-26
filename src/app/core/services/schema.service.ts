import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchemaService {
  
  addPersonSchema() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Loem Heng",
      "url": "https://loemheng.com",
      "description": "Web Developer and Tech Enthusiast",
      "sameAs": [
        "https://www.facebook.com/heng.loem"
      ]
    };
    
    this.insertSchema(schema);
  }

  addWebsiteSchema() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Loem Heng",
      "url": "https://loemheng.com",
      "description": "Personal portfolio and tech blog",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://loemheng.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };
    
    this.insertSchema(schema);
  }

  private insertSchema(schema: any) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}