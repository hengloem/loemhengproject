import { Component, OnInit } from '@angular/core';
import { lh_education } from '@app/data/js/static-data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  lh_eduData: any = [];

  constructor() {

  }

  ngOnInit(): void {
    this.lh_eduData = lh_education;
  }
}
