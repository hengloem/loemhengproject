import { Component, OnInit } from '@angular/core';
import { SkillsService } from '@app/core/services/skills.service';
import { lh_skillCategory } from '@app/shared/models/about.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skillTypes: string[] = [];
  skillCategories: lh_skillCategory[] = [];
  filteredCategories: lh_skillCategory[] = [];
  activeTab: string = '';

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.skillTypes = this.skillsService.getSkillTypes();
    this.activeTab = this.skillTypes[0];
    this.skillsService.getSkills().subscribe(data => {
      this.skillCategories = data;
      this.filterCategories();
    });
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.filterCategories();
  }

  filterCategories(): void {
    this.filteredCategories = this.skillsService.getSkillsByType(this.activeTab);
  }

  getProficiencyLevel(rate: number): string {
    if (rate >= 90) return 'Expert';
    if (rate >= 80) return 'Advanced';
    if (rate >= 70) return 'Proficient';
    if (rate >= 60) return 'Intermediate';
    return 'Beginner';
  }

  getBadgeClass(rate: number): string {
    if (rate >= 85) return 'badge-expert';
    if (rate >= 75) return 'badge-advanced';
    return 'badge-proficient';
  }

  getProgressColor(rate: number): string {
    if (rate >= 90) return 'progress-expert';
    if (rate >= 80) return 'progress-advanced';
    if (rate >= 70) return 'progress-proficient';
    if (rate >= 60) return 'progress-intermediate';
    return 'progress-beginner';
  }
}
