import { Injectable } from '@angular/core';
import { lh_ratingSkills } from '@app/data/js/static-data';
import { SkillCategory } from '@app/shared/models/about.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private lh_ratingSkills = new BehaviorSubject<SkillCategory[]>(lh_ratingSkills);

  getSkills(): Observable<SkillCategory[]> {
    return this.lh_ratingSkills.asObservable();
  }

  getSkillTypes(): string[] {
    return [...new Set(lh_ratingSkills.map(item => item.type))];
  }

  getSkillsByType(type: string): SkillCategory[] {
    return lh_ratingSkills.filter(category => category.type === type);
  }
}
