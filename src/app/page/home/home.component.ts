import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '@app/core/services/header-title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private headerTitleService: HeaderTitleService
  ) { }

  ngOnInit(): void {
    this.headerTitleService.setDocTitle('app.title');
  }

}
