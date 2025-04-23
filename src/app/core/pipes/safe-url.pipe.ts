import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(url: string): SafeUrl | SafeResourceUrl {
    if (url.includes('youtube.com/embed')) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else if (url.startsWith('https://youtu.be/')) {
      // Convert youtu.be links to embedded format
      const videoId = url.split('/').pop();
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    }
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
