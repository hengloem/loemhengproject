import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  ageData: { years: number, suffix: string };
  ageInYears: string;
  ExpInYears: string;

  constructor() { }

  ngOnInit(): void {
    const dateOfBirth = new Date('1995-05-07');
    this.calculateAge(dateOfBirth);
  }

  calculateAge(dateOfBirth: Date): string {
    const convertedDate = new Date(dateOfBirth);
    const timeDifference = Math.abs(Date.now() - convertedDate.getTime());
    const ageInYears = Math.floor((timeDifference / (1000 * 3600 * 24)) / 365);
    const suffix = ageInYears === 1 ? ageInYears + ' year old' : ageInYears + ' years old';
    this.ageInYears = suffix;
    return this.ageInYears;
  }

}
