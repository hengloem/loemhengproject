import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { GridGalleryService } from '@app/core/services/grid-gallery.service';
import { HeaderTitleService } from '@app/core/services/header-title.service';
import { lh_portfolioList } from '@app/data/js/static-data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  lh_portfolioItems: any = [];

  @ViewChild('gridGallery') gridGallery!: ElementRef;

  // For carousel functionality
  currentSlideIndex = 0;

  // For details display
  selectedItem: any = null;

  constructor(
    private headerTitleService: HeaderTitleService,
    private gridGalleryService: GridGalleryService,
    private renderer: Renderer2
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

  ngAfterViewInit(): void {
    // Initialize grid gallery if it exists
    if (this.gridGallery) {
      this.gridGalleryService.initialize(this.gridGallery, this.renderer);
    }
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
}