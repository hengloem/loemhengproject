import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  ageInYears: string;
  ExpInYears: number;
  

  constructor() { }

  ngOnInit(): void {
    this.calculateAge();
    this.calculateExperience();
  }

  calculateAge(): void {
    const dateOfBirth = new Date('1995-05-07'); // Static date of birth
    this.ageInYears = this.calculateAgeFromDateOfBirth(dateOfBirth);
  }

  calculateExperience(): void {
    const startDate = new Date('2017-06-19'); // Static start date of work
    this.ExpInYears = this.calculateYearsOfExperience(startDate);
  }

  calculateAgeFromDateOfBirth(dateOfBirth: Date): string {
    const currentDate = new Date();
    const timeDifference = Math.abs(currentDate.getTime() - dateOfBirth.getTime());
    const ageInYears = Math.floor(timeDifference / (1000 * 3600 * 24 * 365));
    const suffix = ageInYears === 1 ? ageInYears + ' year old' : ageInYears + ' years old';
    this.ageInYears = suffix;
    return this.ageInYears;
  }

  calculateYearsOfExperience(startDate: Date): number {
    const currentDate = new Date();
    const timeDifference = Math.abs(currentDate.getTime() - startDate.getTime());
    const yearsOfExperience = Math.floor(timeDifference / (1000 * 3600 * 24 * 365));
    return yearsOfExperience;
  }

}
