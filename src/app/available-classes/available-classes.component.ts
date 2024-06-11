import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardComponent } from '../card/card.component';
import { HeaderComponent } from '../header/header.component';
import { AvailableClass } from '../models/availableClass';


@Component({
  selector: 'app-available-classes',
  standalone: true,
  imports: [HeaderComponent, CommonModule, CardComponent, FormsModule],
  templateUrl: './available-classes.component.html',
  styleUrl: './available-classes.component.css',
})
export class AvailableClassesComponent {
  title: string = 'Estas são as aulas disponíveis.';
  techTypes = [
    'Front End',
    'Back End',
    'Data Science',
    'Machine Learning',
    'Cyber Security',
    'Software Architecture',
  ];

  lessons: AvailableClass[] = [
    {
      id: 2,
      title: 'Advanced Angular',
      instructor: 'Jane Smith',
      description: 'Deep dive into Angular advanced topics.',
      techType: 'Front End',
      createdAt: new Date(),
      watched: true,
    },
    {
      id: 3,
      title: 'TypeScript Fundamentals',
      instructor: 'Emily Johnson',
      description: 'Learn the basics of TypeScript.',
      techType: 'Front End',
      createdAt: new Date(),
      watched: false,
    },
    {
      id: 1,
      title: 'Angular Basics',
      instructor: 'John Doe',
      description: 'Introduction to Angular fundamentals.',
      techType: 'Front End',
      createdAt: new Date(),
      watched: false,
    },
  ];
  declare searchTitle: string;


  get filteredLessons(): AvailableClass[] {
    if (this.searchTitle) {
      return this.lessons.filter((lesson) =>
        lesson.title.toLowerCase().includes(this.searchTitle.toLowerCase())
      );
    }
   
    return this.lessons;
  }
}
