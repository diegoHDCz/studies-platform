import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  title = 'studyGFT';
  imgPath = 'assets/myimage.jpg';
}
