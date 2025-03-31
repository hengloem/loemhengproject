import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '@app/core/services/header-title.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  dummyVdo: string = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQog9JAAAhwbJhbnruQEBWugpQzX-lzuXt-7Fmt504cehxOW-0MrP8IN9WsdhUIBSTQ2Wmp87ODWbAJaCMGCbC38_2YoNaApnID8nJoZ76JIGwSvcWTjmGKzQW2xv4Tf33fhDPUZcI1TceGsdt8UqBohF9mT2l6hKdocGvsDMBxiAzoXG9kk_U0bMW/s1200/kamlot-amarak-farm-cover.jpg";

  constructor(
    private headerTitleService: HeaderTitleService
  ) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle('app.blog');
  }

}
