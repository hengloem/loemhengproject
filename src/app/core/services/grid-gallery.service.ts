import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { VideoService } from './video.service';

@Injectable({
  providedIn: 'root'
})
export class GridGalleryService {
  private currentItem: number = 0;
  private totalItems: number = 0;
  private isAnimating: boolean = false;
  private slideshow!: HTMLElement;
  private items!: HTMLElement[];
  private navPrev!: HTMLElement;
  private navNext!: HTMLElement;
  private navClose!: HTMLElement;

  constructor(private videoService: VideoService) { }

  initialize(gridGalleryRef: ElementRef, renderer: Renderer2): void {
    const gridGallery = gridGalleryRef.nativeElement;
    this.slideshow = gridGallery.querySelector('.slideshow');

    if (!this.slideshow) {
      console.error('Slideshow element not found');
      return;
    }

    this.items = Array.from(gridGallery.querySelectorAll('.grid figure'));
    this.totalItems = this.items.length;

    this.navPrev = this.slideshow.querySelector('.nav-prev');
    this.navNext = this.slideshow.querySelector('.nav-next');
    this.navClose = this.slideshow.querySelector('.nav-close');

    // Set up the slideshow items
    const slideshowItems = this.slideshow.querySelector('ul');
    this.items.forEach((item, index) => {
      const figure = item.querySelector('figure');
      const imgSrc = figure?.querySelector('img')?.getAttribute('src');
      const figcaption = figure?.querySelector('figcaption')?.innerHTML;

      const slideshowItem = renderer.createElement('li');

      let innerHTML = '';
      if (imgSrc) {
        innerHTML += `<img src="${imgSrc}" alt=""/>`;
      }
      if (figcaption) {
        innerHTML += `<figcaption>${figcaption}</figcaption>`;
      }

      slideshowItem.innerHTML = innerHTML;
      renderer.appendChild(slideshowItems, slideshowItem);

      // Add click event to grid items
      item.addEventListener('click', (event) => {
        this.openItem(index);
        document.getElementById('navbar-collapse-toggle')?.classList.add('hide-header');
        event.preventDefault();
      });
    });

    // Add event listeners for navigation
    this.navPrev.addEventListener('click', () => {
      this.navigate('prev');
      this.videoService.stopVideos();

      if (this.currentItem === 0) {
        document.getElementById('navbar-collapse-toggle')?.classList.remove('hide-header');
      }
    });

    this.navNext.addEventListener('click', () => {
      this.navigate('next');
      this.videoService.stopVideos();

      if (this.currentItem === this.totalItems - 1) {
        document.getElementById('navbar-collapse-toggle')?.classList.remove('hide-header');
      }
    });

    this.navClose.addEventListener('click', () => {
      this.closeSlideshow();
      document.getElementById('navbar-collapse-toggle')?.classList.remove('hide-header');
    });

    // Keyboard navigation
    document.addEventListener('keyup', (event) => {
      if (event.key === 'Escape') {
        this.videoService.stopVideos();
        this.closeSlideshow();
        document.getElementById('navbar-collapse-toggle')?.classList.remove('hide-header');
      } else if (event.key === 'ArrowLeft') {
        this.navigate('prev');
        this.videoService.stopVideos();
      } else if (event.key === 'ArrowRight') {
        this.navigate('next');
        this.videoService.stopVideos();
      }
    });
  }

  private openItem(index: number): void {
    if (this.isAnimating) return;
    this.isAnimating = true;

    // Show slideshow
    this.slideshow.classList.add('slideshow-open');

    // Set current item
    this.currentItem = index;
    const slideshowItems = this.slideshow.querySelectorAll('li');
    slideshowItems[this.currentItem].classList.add('current');

    // Finished animation
    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }

  private closeSlideshow(): void {
    if (this.isAnimating) return;
    this.isAnimating = true;

    // Hide slideshow
    this.slideshow.classList.remove('slideshow-open');

    // Remove current class
    const current = this.slideshow.querySelector('li.current');
    current?.classList.remove('current');

    // Finished animation
    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }

  private navigate(direction: 'next' | 'prev'): void {
    if (this.isAnimating) return;
    this.isAnimating = true;

    const slideshowItems = this.slideshow.querySelectorAll('li');

    // Update current item
    slideshowItems[this.currentItem].classList.remove('current');

    if (direction === 'next' && this.currentItem < this.totalItems - 1) {
      this.currentItem++;
    } else if (direction === 'prev' && this.currentItem > 0) {
      this.currentItem--;
    } else {
      this.isAnimating = false;
      return;
    }

    // Set new current item
    slideshowItems[this.currentItem].classList.add('current');

    // Finished animation
    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }
}
