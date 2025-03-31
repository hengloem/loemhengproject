import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '@app/core/services/header-title.service';

declare var $: any; // Declare $ to use jQuery

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
      src: 'http://via.placeholder.com/895x552.jpg',
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
        { src: 'http://via.placeholder.com/895x552.jpg' },
        { src: 'http://via.placeholder.com/895x552.jpg' },
        { src: 'http://via.placeholder.com/895x552.jpg' }
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
      poster: 'http://via.placeholder.com/895x552.jpg',
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
