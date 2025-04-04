// portfolio.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

interface PortfolioDetail {
  icon: string;
  label: string;
  value: string;
}

interface PortfolioSlide {
  src: string;
}

interface PortfolioItem {
  id: number;
  title: string;
  type: 'image' | 'video' | 'carousel';
  src: string;
  platform?: 'youtube' | 'local';
  poster?: string;
  slides?: PortfolioSlide[];
  details: PortfolioDetail[];
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  lh_portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Image Project',
      type: 'image',
      src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQog9JAAAhwbJhbnruQEBWugpQzX-lzuXt-7Fmt504cehxOW-0MrP8IN9WsdhUIBSTQ2Wmp87ODWbAJaCMGCbC38_2YoNaApnID8nJoZ76JIGwSvcWTjmGKzQW2xv4Tf33fhDPUZcI1TceGsdt8UqBohF9mT2l6hKdocGvsDMBxiAzoXG9kk_U0bMW/s1200/kamlot-amarak-farm-cover.jpg',
      details: [
        { icon: 'fas fa-file-alt', label: 'Project', value: 'Website' },
        { icon: 'fas fa-code', label: 'Languages', value: 'HTML, CSS, JS' },
        { icon: 'fas fa-external-link-alt', label: 'Preview', value: 'www.example.com' }
      ]
    },
    // {
    //   id: 2,
    //   title: 'Youtube Project',
    //   type: 'video',
    //   platform: 'youtube',
    //   src: 'https://youtu.be/5CJ8-XaBxlU?si=7tA27vS6qGcqN_BA',
    //   details: [
    //     { icon: 'fas fa-file-alt', label: 'Project', value: 'Video' },
    //     { icon: 'fas fa-code', label: 'Type', value: 'Youtube' },
    //     { icon: 'fas fa-external-link-alt', label: 'Preview', value: 'www.youtube.com' }
    //   ]
    // },
    {
      id: 3,
      title: 'Slider Project',
      type: 'carousel',
      src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQog9JAAAhwbJhbnruQEBWugpQzX-lzuXt-7Fmt504cehxOW-0MrP8IN9WsdhUIBSTQ2Wmp87ODWbAJaCMGCbC38_2YoNaApnID8nJoZ76JIGwSvcWTjmGKzQW2xv4Tf33fhDPUZcI1TceGsdt8UqBohF9mT2l6hKdocGvsDMBxiAzoXG9kk_U0bMW/s1200/kamlot-amarak-farm-cover.jpg',
      slides: [
        { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQog9JAAAhwbJhbnruQEBWugpQzX-lzuXt-7Fmt504cehxOW-0MrP8IN9WsdhUIBSTQ2Wmp87ODWbAJaCMGCbC38_2YoNaApnID8nJoZ76JIGwSvcWTjmGKzQW2xv4Tf33fhDPUZcI1TceGsdt8UqBohF9mT2l6hKdocGvsDMBxiAzoXG9kk_U0bMW/s1200/kamlot-amarak-farm-cover.jpg' },
        { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQog9JAAAhwbJhbnruQEBWugpQzX-lzuXt-7Fmt504cehxOW-0MrP8IN9WsdhUIBSTQ2Wmp87ODWbAJaCMGCbC38_2YoNaApnID8nJoZ76JIGwSvcWTjmGKzQW2xv4Tf33fhDPUZcI1TceGsdt8UqBohF9mT2l6hKdocGvsDMBxiAzoXG9kk_U0bMW/s1200/kamlot-amarak-farm-cover.jpg' },
        { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQog9JAAAhwbJhbnruQEBWugpQzX-lzuXt-7Fmt504cehxOW-0MrP8IN9WsdhUIBSTQ2Wmp87ODWbAJaCMGCbC38_2YoNaApnID8nJoZ76JIGwSvcWTjmGKzQW2xv4Tf33fhDPUZcI1TceGsdt8UqBohF9mT2l6hKdocGvsDMBxiAzoXG9kk_U0bMW/s1200/kamlot-amarak-farm-cover.jpg' }
      ],
      details: [
        { icon: 'fas fa-file-alt', label: 'Project', value: 'Slider' },
        { icon: 'fas fa-code', label: 'Type', value: 'Carousel' },
        { icon: 'fas fa-external-link-alt', label: 'Preview', value: 'www.example.com' }
      ]
    },
    // {
    //   id: 4,
    //   title: 'Local Video Project',
    //   type: 'video',
    //   platform: 'local',
    //   src: 'assets/videos/video.mp4',
    //   poster: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQog9JAAAhwbJhbnruQEBWugpQzX-lzuXt-7Fmt504cehxOW-0MrP8IN9WsdhUIBSTQ2Wmp87ODWbAJaCMGCbC38_2YoNaApnID8nJoZ76JIGwSvcWTjmGKzQW2xv4Tf33fhDPUZcI1TceGsdt8UqBohF9mT2l6hKdocGvsDMBxiAzoXG9kk_U0bMW/s1200/kamlot-amarak-farm-cover.jpg',
    //   details: [
    //     { icon: 'fas fa-file-alt', label: 'Project', value: 'Video' },
    //     { icon: 'fas fa-code', label: 'Type', value: 'Local' },
    //     { icon: 'fas fa-external-link-alt', label: 'Preview', value: 'N/A' }
    //   ]
    // },
    {
      id: 5,
      title: 'Image Project 2',
      type: 'image',
      src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQog9JAAAhwbJhbnruQEBWugpQzX-lzuXt-7Fmt504cehxOW-0MrP8IN9WsdhUIBSTQ2Wmp87ODWbAJaCMGCbC38_2YoNaApnID8nJoZ76JIGwSvcWTjmGKzQW2xv4Tf33fhDPUZcI1TceGsdt8UqBohF9mT2l6hKdocGvsDMBxiAzoXG9kk_U0bMW/s1200/kamlot-amarak-farm-cover.jpg',
      details: [
        { icon: 'fas fa-file-alt', label: 'Project', value: 'Website' },
        { icon: 'fas fa-code', label: 'Languages', value: 'HTML, CSS, JS' },
        { icon: 'fas fa-external-link-alt', label: 'Preview', value: 'www.example.com' }
      ]
    },
    {
      id: 6,
      title: 'Image Project 3',
      type: 'image',
      src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQog9JAAAhwbJhbnruQEBWugpQzX-lzuXt-7Fmt504cehxOW-0MrP8IN9WsdhUIBSTQ2Wmp87ODWbAJaCMGCbC38_2YoNaApnID8nJoZ76JIGwSvcWTjmGKzQW2xv4Tf33fhDPUZcI1TceGsdt8UqBohF9mT2l6hKdocGvsDMBxiAzoXG9kk_U0bMW/s1200/kamlot-amarak-farm-cover.jpg',
      details: [
        { icon: 'fas fa-file-alt', label: 'Project', value: 'Website' },
        { icon: 'fas fa-code', label: 'Languages', value: 'HTML, CSS, JS' },
        { icon: 'fas fa-external-link-alt', label: 'Preview', value: 'www.example.com' }
      ]
    }
  ];

  activeIndex = 0;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initializePortfolio();
  }

  // Initialize the portfolio grid and slideshow
  initializePortfolio(): void {
    // Wait for the DOM to be fully loaded
    setTimeout(() => {
      this.setupGridGallery();
    }, 100);
  }

  // Set up the grid gallery
  setupGridGallery(): void {
    // Get elements
    const grid = document.querySelector('.grid');
    const items = document.querySelectorAll('.grid li');
    const slideshow = document.querySelector('.slideshow');
    const slideshowItems = document.querySelectorAll('.slideshow > ul > li');
    const closeBtn = document.querySelector('.nav-close');
    const prevBtn = document.querySelector('.nav-prev');
    const nextBtn = document.querySelector('.nav-next');

    if (!grid || !items || !slideshow || !slideshowItems || !closeBtn || !prevBtn || !nextBtn) {
      console.error('Missing required elements for portfolio gallery');
      return;
    }

    // Handle click on grid items
    items.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        this.openSlideshow(index);
      });
    });

    // Close slideshow
    closeBtn.addEventListener('click', () => {
      this.closeSlideshow();
    });

    // Previous slide
    prevBtn.addEventListener('click', () => {
      this.navigateSlideshow('prev');
    });

    // Next slide
    nextBtn.addEventListener('click', () => {
      this.navigateSlideshow('next');
    });

    // Initialize carousel for any carousel items
    this.initializeCarousels();
  }

  // Open slideshow
  openSlideshow(index: number): void {
    this.activeIndex = index;

    const slideshow = document.querySelector('.slideshow');
    const slideshowItems = document.querySelectorAll('.slideshow > ul > li');
    const grid = document.querySelector('.grid-wrap');

    if (!slideshow || !slideshowItems || !grid) return;

    // Hide grid and show slideshow
    grid.classList.add('hide-grid');
    slideshow.classList.add('show-slideshow');

    // Show the selected item
    slideshowItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add('current');
      } else {
        item.classList.remove('current');
      }
    });

    // Initialize carousel if it's a carousel item
    if (this.lh_portfolioItems[index].type === 'carousel') {
      setTimeout(() => {
        this.initializeCarousel(index);
      }, 100);
    }
  }

  // Close slideshow
  closeSlideshow(): void {
    const slideshow = document.querySelector('.slideshow');
    const slideshowItems = document.querySelectorAll('.slideshow > ul > li');
    const grid = document.querySelector('.grid-wrap');

    if (!slideshow || !slideshowItems || !grid) return;

    // Hide slideshow and show grid
    slideshow.classList.remove('show-slideshow');
    grid.classList.remove('hide-grid');

    // Reset all items
    slideshowItems.forEach(item => {
      item.classList.remove('current');
    });
  }

  // Navigate through slideshow
  navigateSlideshow(direction: 'prev' | 'next'): void {
    const slideshowItems = document.querySelectorAll('.slideshow > ul > li');

    if (!slideshowItems.length) return;

    // Calculate new index
    let newIndex = this.activeIndex;
    if (direction === 'prev') {
      newIndex = (newIndex - 1 + slideshowItems.length) % slideshowItems.length;
    } else {
      newIndex = (newIndex + 1) % slideshowItems.length;
    }

    // Update active item
    slideshowItems.forEach((item, i) => {
      if (i === newIndex) {
        item.classList.add('current');
      } else {
        item.classList.remove('current');
      }
    });

    this.activeIndex = newIndex;

    // Initialize carousel if it's a carousel item
    if (this.lh_portfolioItems[newIndex].type === 'carousel') {
      setTimeout(() => {
        this.initializeCarousel(newIndex);
      }, 100);
    }
  }

  // Initialize specific carousel
  initializeCarousel(index: number): void {
    const carousel = document.querySelector(`.slideshow > ul > li:nth-child(${index + 1}) .carousel`);
    if (!carousel) return;

    // Use Bootstrap's carousel API if available
    try {
      // @ts-ignore: Suppress TS error for Bootstrap
      const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: false
      });
    } catch (error) {
      console.error('Error initializing carousel:', error);
    }
  }

  // Initialize all carousels
  initializeCarousels(): void {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
      try {
        // @ts-ignore: Suppress TS error for Bootstrap
        const carouselInstance = new bootstrap.Carousel(carousel, {
          interval: false
        });
      } catch (error) {
        console.error('Error initializing carousel:', error);
      }
    });
  }

  // Safe URL pipe alternative
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}