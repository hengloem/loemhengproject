import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderTitleService {
  title = new BehaviorSubject('app.title');

  constructor(
    private translate: TranslateService,
    private titleService: Title
  ) { }

  setDocTitle(title: string) {
    this.translate.get(title).subscribe((res: string) => {
      console.log(res);
      this.titleService.setTitle(res);
    });
  }

  setTitle(title: string) {
    this.title.next(title);
  }
}
