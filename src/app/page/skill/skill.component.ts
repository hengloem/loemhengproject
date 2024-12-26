import { Component, OnInit } from '@angular/core';
import { lh_ratingSkills } from '@app/data/js/static-data';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  lh_skillData: any = [];

  constructor() { }

  ngOnInit(): void {
    this.lh_skillData = lh_ratingSkills;
  }

}
