import { Injectable, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderTitleService implements OnDestroy {
  title = new BehaviorSubject<string>('');
  private languageSubscription: Subscription;

  constructor(
    private translate: TranslateService,
    private titleService: Title
  ) {
    // Subscribe to language changes to update the title dynamically
    this.languageSubscription = this.translate.onLangChange.subscribe(() => {
      const currentTitle = this.title.getValue();
      this.setDocTitle(currentTitle);
    });
  }

  // Set document title with translation key
  setDocTitle(titleKey: string) {
    this.translate.get(titleKey).subscribe((translatedTitle: string) => {
      this.titleService.setTitle(translatedTitle);
    });
  }

  // Set title key and update document title
  setTitle(titleKey: string) {
    this.title.next(titleKey);
    this.setDocTitle(titleKey); // Apply the title in current language
  }

  // Clean up the subscription on service destroy
  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}
