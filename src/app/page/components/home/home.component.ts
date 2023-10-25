import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  profile: string = './../../../../assets/img/photos/02_300_x_300.png'

  constructor() { }

  ngOnInit(): void {
  }

}
