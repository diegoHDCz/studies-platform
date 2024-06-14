import { CommonModule } from '@angular/common';
import { Component, Input, Pipe } from '@angular/core';

import { AvailableClass } from '../models/availableClass';
import { CustomDatePipe } from '../utils/custom-date';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CustomDatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  checked = 'assets/checked.png';
  eyed = 'assets/icons-eye.jpg';
  watched = false;

  @Pipe({
    name: 'customDate',
  })
  @Input()
  lesson!: AvailableClass;
}
