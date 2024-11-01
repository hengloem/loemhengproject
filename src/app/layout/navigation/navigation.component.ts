import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MENUS } from '@app/data/js/static-data';
import { MenuItem } from '@app/shared/models/utils.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  menus: MenuItem[] = [];

  constructor(
    private router: Router,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.menus = MENUS;

    const userLanguage = navigator.language === 'km' ? 'kh' : 'en';
    this.translate.use(userLanguage);
  }

  menuIsActive(route: string): string {
    return this.router.url === route ? "active" : "";
  }  

}
