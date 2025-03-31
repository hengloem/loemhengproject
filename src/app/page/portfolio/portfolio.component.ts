import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '@app/core/services/header-title.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  lh_portfolioItems = [
    {
      title: 'Image Project',
      type: 'image',
      src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQog9JAAAhwbJhbnruQEBWugpQzX-lzuXt-7Fmt504cehxOW-0MrP8IN9WsdhUIBSTQ2Wmp87ODWbAJaCMGCbC38_2YoNaApnID8nJoZ76JIGwSvcWTjmGKzQW2xv4Tf33fhDPUZcI1TceGsdt8UqBohF9mT2l6hKdocGvsDMBxiAzoXG9kk_U0bMW/s1200/kamlot-amarak-farm-cover.jpg',
      details: [
        { label: 'Project', value: 'Website', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'Envato', icon: 'fa fa-user-o' },
        { label: 'Langages', value: 'HTML, CSS, Javascript', icon: 'fa fa-code' },
        { label: 'Preview', value: 'www.envato.com', icon: 'fa fa-external-link' }
      ]
    },
    // Add other items here...
    {
      title: 'Slider Project',
      type: 'carousel',
      slides: [
        { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQog9JAAAhwbJhbnruQEBWugpQzX-lzuXt-7Fmt504cehxOW-0MrP8IN9WsdhUIBSTQ2Wmp87ODWbAJaCMGCbC38_2YoNaApnID8nJoZ76JIGwSvcWTjmGKzQW2xv4Tf33fhDPUZcI1TceGsdt8UqBohF9mT2l6hKdocGvsDMBxiAzoXG9kk_U0bMW/s1200/kamlot-amarak-farm-cover.jpg' },
        { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQog9JAAAhwbJhbnruQEBWugpQzX-lzuXt-7Fmt504cehxOW-0MrP8IN9WsdhUIBSTQ2Wmp87ODWbAJaCMGCbC38_2YoNaApnID8nJoZ76JIGwSvcWTjmGKzQW2xv4Tf33fhDPUZcI1TceGsdt8UqBohF9mT2l6hKdocGvsDMBxiAzoXG9kk_U0bMW/s1200/kamlot-amarak-farm-cover.jpg' },
        { src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQog9JAAAhwbJhbnruQEBWugpQzX-lzuXt-7Fmt504cehxOW-0MrP8IN9WsdhUIBSTQ2Wmp87ODWbAJaCMGCbC38_2YoNaApnID8nJoZ76JIGwSvcWTjmGKzQW2xv4Tf33fhDPUZcI1TceGsdt8UqBohF9mT2l6hKdocGvsDMBxiAzoXG9kk_U0bMW/s1200/kamlot-amarak-farm-cover.jpg' }
      ],
      details: [
        { label: 'Project', value: 'Website', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'Themeforest', icon: 'fa fa-user-o' },
        { label: 'Langages', value: 'HTML, CSS, Javascript', icon: 'fa fa-code' },
        { label: 'Preview', value: 'www.themeforest.net', icon: 'fa fa-external-link' }
      ]
    },
    {
      title: 'Youtube Project',
      type: 'video',
      platform: 'youtube',
      src: 'https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&version=3&playerapiid=ytplayer',
      details: [
        { label: 'Project', value: 'Video', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'Videohive', icon: 'fa fa-user-o' },
        { label: 'Langages', value: 'Adobe After Effects', icon: 'fa fa-code' },
        { label: 'Preview', value: 'www.videohive.net', icon: 'fa fa-external-link' }
      ]
    },
    {
      title: 'Local Video Project',
      type: 'video',
      platform: 'local',
      src: 'https://youtu.be/-fERfZ_x4bk',
      poster: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQog9JAAAhwbJhbnruQEBWugpQzX-lzuXt-7Fmt504cehxOW-0MrP8IN9WsdhUIBSTQ2Wmp87ODWbAJaCMGCbC38_2YoNaApnID8nJoZ76JIGwSvcWTjmGKzQW2xv4Tf33fhDPUZcI1TceGsdt8UqBohF9mT2l6hKdocGvsDMBxiAzoXG9kk_U0bMW/s1200/kamlot-amarak-farm-cover.jpg',
      details: [
        { label: 'Project', value: 'Video', icon: 'fa fa-file-text-o' },
        { label: 'Client', value: 'Videohive', icon: 'fa fa-user-o' },
        { label: 'Langages', value: 'Adobe Premium', icon: 'fa fa-code' },
        { label: 'Preview', value: 'www.envato.com', icon: 'fa fa-external-link' }
      ]
    }
    // Add more items as needed
  ];

  constructor(
    private headerTitleService: HeaderTitleService
  ) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle('app.portfolio');
  }

}
