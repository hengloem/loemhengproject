import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  ageData: { years: number, suffix: string };

  constructor() { }

  ngOnInit(): void {
    this.calculateAge()

  }

  calculateAge(): { years: number, suffix: string } {
    const birthDate: Date = new Date('1995-05-07');
    const currentDate: Date = new Date();

    // Calculate the difference in milliseconds
    const difference = currentDate.getTime() - birthDate.getTime();

    // Convert the difference to years
    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    
    // Determine the suffix based on the age
    const suffix = years === 1 ? 'year old' : 'years old';
    
    return { years, suffix };
  }
}
