import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '@app/core/services/header-title.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  lh_AgeInYears: string;
  lh_ExpInYears: number;

  constructor(
    private headerTitleService: HeaderTitleService
  ) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle('app.about');

    this.calculateAge();
    this.calculateExperience();
  }

  calculateAge(): void {
    const dateOfBirth = new Date('1995-05-07'); // Static date of birth
    this.lh_AgeInYears = this.calculateAgeFromDateOfBirth(dateOfBirth);
  }

  calculateExperience(): void {
    const startDate = new Date('2017-06-19'); // Static start date of work
    this.lh_ExpInYears = this.calculateYearsOfExperience(startDate);
  }

  calculateAgeFromDateOfBirth(dateOfBirth: Date): string {
    const currentDate = new Date();
    const timeDifference = Math.abs(currentDate.getTime() - dateOfBirth.getTime());
    const lh_AgeInYear = Math.floor(timeDifference / (1000 * 3600 * 24 * 365));
    const suffix = lh_AgeInYear === 1 ? lh_AgeInYear + ' year old' : lh_AgeInYear + ' years old';
    this.lh_AgeInYears = suffix;
    return this.lh_AgeInYears;
  }

  calculateYearsOfExperience(startDate: Date): number {
    const currentDate = new Date();
    const timeDifference = Math.abs(currentDate.getTime() - startDate.getTime());
    const yearsOfExperience = Math.floor(timeDifference / (1000 * 3600 * 24 * 365));
    return yearsOfExperience;
  }

}
