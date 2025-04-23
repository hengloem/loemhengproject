import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {
  private overlay!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // Create overlay element
    this.overlay = this.renderer.createElement('div');
    this.renderer.addClass(this.overlay, 'overlay');
    this.renderer.setStyle(this.overlay, 'position', 'absolute');
    this.renderer.setStyle(this.overlay, 'top', '0');
    this.renderer.setStyle(this.overlay, 'left', '0');
    this.renderer.setStyle(this.overlay, 'right', '0');
    this.renderer.setStyle(this.overlay, 'bottom', '0');
    this.renderer.setStyle(this.overlay, 'opacity', '0');
    this.renderer.setStyle(this.overlay, 'transition', 'all 0.3s ease');

    // Add overlay to host element
    this.renderer.appendChild(this.el.nativeElement, this.overlay);
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent): void {
    const x = event.offsetX;
    const y = event.offsetY;
    const w = this.el.nativeElement.offsetWidth;
    const h = this.el.nativeElement.offsetHeight;

    // Determine direction
    const direction = this.getDirection(x, y, w, h);

    // Set initial position based on direction
    switch (direction) {
      case 0: // from top
        this.renderer.setStyle(this.overlay, 'transform', 'translateY(-100%)');
        break;
      case 1: // from right
        this.renderer.setStyle(this.overlay, 'transform', 'translateX(100%)');
        break;
      case 2: // from bottom
        this.renderer.setStyle(this.overlay, 'transform', 'translateY(100%)');
        break;
      case 3: // from left
        this.renderer.setStyle(this.overlay, 'transform', 'translateX(-100%)');
        break;
    }

    // Reset and show
    setTimeout(() => {
      this.renderer.setStyle(this.overlay, 'transform', 'translate(0,0)');
      this.renderer.setStyle(this.overlay, 'opacity', '1');
    }, 10);
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent): void {
    const x = event.offsetX;
    const y = event.offsetY;
    const w = this.el.nativeElement.offsetWidth;
    const h = this.el.nativeElement.offsetHeight;

    // Determine direction 
    const direction = this.getDirection(x, y, w, h);

    // Animate out based on direction
    switch (direction) {
      case 0: // to top
        this.renderer.setStyle(this.overlay, 'transform', 'translateY(-100%)');
        break;
      case 1: // to right
        this.renderer.setStyle(this.overlay, 'transform', 'translateX(100%)');
        break;
      case 2: // to bottom
        this.renderer.setStyle(this.overlay, 'transform', 'translateY(100%)');
        break;
      case 3: // to left
        this.renderer.setStyle(this.overlay, 'transform', 'translateX(-100%)');
        break;
    }

    this.renderer.setStyle(this.overlay, 'opacity', '0');
  }

  // Helper function to determine direction
  private getDirection(x: number, y: number, w: number, h: number): number {
    const l = x / w;
    const t = y / h;
    const r = 1 - l;
    const b = 1 - t;
    const min = Math.min(l, t, r, b);

    if (min === l) return 3;      // left
    else if (min === t) return 0; // top
    else if (min === r) return 1; // right
    else return 2;                // bottom
  }
}
