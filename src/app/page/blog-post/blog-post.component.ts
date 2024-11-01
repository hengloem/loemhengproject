import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '@app/core/services/header-title.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit{
  dummyVdo: string = "https://via.placeholder.com/895x552.jpg";

  constructor(
    private headerTitleService: HeaderTitleService
  ) {}

  ngOnInit(): void {
    this.headerTitleService.setTitle('app.blog');
  }

}
