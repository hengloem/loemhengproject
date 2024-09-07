import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MENUS } from '@app/shared/js/static-data';
import { MenuItem } from '@app/shared/models/utils.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  menus: MenuItem[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menus = MENUS;
  }

  menuIsActive(route: string): string {
    return this.router.url === route ? "active" : "";
  }  

}
