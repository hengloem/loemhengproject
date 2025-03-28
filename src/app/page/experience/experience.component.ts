import { Component, OnInit } from '@angular/core';
import { lh_fullTimeExperiences, lh_seasonalExperiences, lh_selfEmployedExperiences } from '@app/data/js/static-data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  lh_fullTimeExp: any = [];
  lh_seasonalExp: any = [];
  lh_selfEmpExp: any = [];

  constructor() {

  }

  ngOnInit(): void {
    this.lh_fullTimeExp = lh_fullTimeExperiences;
    this.lh_seasonalExp = lh_seasonalExperiences;
    this.lh_selfEmpExp = lh_selfEmployedExperiences;
  }

  /**
 * Calculate the duration between two dates.
 */
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
}
