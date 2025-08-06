import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '@app/core/services/header-title.service';
import { lh_portfolioList } from '@app/data/js/static-data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  lh_portfolioItems: any = [];

  // For carousel functionality
  currentSlideIndex = 0;

  // For details display
  selectedItem: any = null;

  constructor(
    private headerTitleService: HeaderTitleService
  ) {

  }

  ngOnInit(): void {
    this.headerTitleService.setTitle('app.portfolio');

    // Add revealator class
    document.querySelectorAll('.revealator-delay1').forEach(el => {
      el.classList.add('no-transform');
    });

    this.lh_portfolioItems = lh_portfolioList;
  }

  // Carousel controls
  nextSlide(): void {
    const carouselItems = this.getCarouselItems();
    if (carouselItems && carouselItems.length > 0) {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % carouselItems[0].slides.length;
    }
  }

  prevSlide(): void {
    const carouselItems = this.getCarouselItems();
    if (carouselItems && carouselItems.length > 0) {
      const slidesLength = carouselItems[0].slides.length;
      this.currentSlideIndex = (this.currentSlideIndex - 1 + slidesLength) % slidesLength;
    }
  }

  // Helper method to get carousel items
  private getCarouselItems(): any[] {
    return this.lh_portfolioItems.filter(item => item.type === 'carousel');
  }

  // Item detail display methods
  showDetails(item: any): void {
    this.selectedItem = item;
  }

  closeDetails(): void {
    this.selectedItem = null;
  }

  getYoutubeEmbedUrl(src: string, cc: boolean = false): string {
    const url = new URL(src);
    if (cc) {
      url.searchParams.set('cc_load_policy', '1'); // Enable CC
    }
    url.searchParams.set('autoplay', '1'); // Autoplay when clicked
    return url.toString();
  }

  playVideo() {
    console.log('Playing video:', this.selectedItem.url);
    this.selectedItem.playing = true;
  }

  onVideoError(event: any) {
    console.error('Video error:', event);
    this.selectedItem.playing = false;
  }
}