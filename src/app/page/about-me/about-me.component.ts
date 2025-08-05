import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '@app/core/services/header-title.service';
import { lh_education, lh_fullTimeExperiences, lh_ratingSkills, lh_seasonalExperiences, lh_selfEmployedExperiences } from '@app/data/js/static-data';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  lh_AgeInYears: string;
  lh_ExpInYears: number;
  lh_fullTimeExp: any = [];
  lh_seasonalExp: any = [];
  lh_selfEmpExp: any = [];
  lh_eduData: any = [];

  expandedJobs: { [key: number]: boolean } = {};

  constructor(
    private headerTitleService: HeaderTitleService
  ) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle('app.about');
    this.lh_eduData = lh_education;
    this.lh_fullTimeExp = lh_fullTimeExperiences;
    this.lh_seasonalExp = lh_seasonalExperiences;
    this.lh_selfEmpExp = lh_selfEmployedExperiences;

    this.calculateAge();
    this.calculateExperience();
  }

  calculateAge(): void {
    const dateOfBirth = new Date('1997-05-07'); // Static date of birth
    this.lh_AgeInYears = this.calculateAgeFromDateOfBirth(dateOfBirth);
  }

  calculateDuration(startDate: string, endDate: string): string {
    const start = new Date(startDate);
    const end = endDate === 'Present' ? new Date() : new Date(endDate);

    const months = (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let duration = '';
    if (years > 0) duration += `${years} ${years === 1 ? 'yr' : 'yrs'}`;
    if (remainingMonths > 0) duration += ` ${remainingMonths} ${remainingMonths === 1 ? 'mo' : 'mos'}`;

    return duration.trim();
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

  click_preview_resume() {

  }

  getJobKey(job: any): string {
    return JSON.stringify(job); // Or combine fields like job.title + job.company
  }

  toggleDescription(key: string): void {
    this.expandedJobs[key] = !this.expandedJobs[key];
  }

  isExpanded(key: string): boolean {
    return this.expandedJobs[key];
  }

}
