import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardComponent } from '../card/card.component';
import { HeaderComponent } from '../header/header.component';
import { AvailableClass, mapToAvailable } from '../models/availableClass';
import { ApiService } from '../services/api.service';

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

  constructor(private apiService: ApiService) {}

  lessons: AvailableClass[] = [];

  list() {
    this.apiService.getList().subscribe({
      next: (result) => {
        this.lessons = mapToAvailable(result);
        console.log('deu certo', this.lessons);
      },
      error: (err) => console.log('deu ruim!'),
    });
  }

  ngOnInit() {
    this.list();
  }

  declare searchTitle: string;
  declare banana: string;

  get filteredLessons(): AvailableClass[] {
    if (this.searchTitle) {
      return this.lessons.filter((lesson) =>
        lesson.title.toLowerCase().includes(this.searchTitle.toLowerCase())
      );
    }

    return this.lessons;
  }
}
