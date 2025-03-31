import { Injectable } from '@angular/core';
import { lh_ratingSkills } from '@app/data/js/static-data';
import { lh_skillCategory } from '@app/shared/models/about.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private lh_ratingSkills = new BehaviorSubject<lh_skillCategory[]>(lh_ratingSkills);

  getSkills(): Observable<lh_skillCategory[]> {
    return this.lh_ratingSkills.asObservable();
  }

  getSkillTypes(): string[] {
    return [...new Set(lh_ratingSkills.map(item => item.type))];
  }

  getSkillsByType(type: string): lh_skillCategory[] {
    return lh_ratingSkills.filter(category => category.type === type);
  }
}
