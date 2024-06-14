import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { ClassRegistration, mapToEntity } from '../models/classRegistration';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-class-registration',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule, HeaderComponent],
  templateUrl: './class-registration.component.html',
  styleUrl: './class-registration.component.css',
})
export class ClassRegistrationComponent {
  title = 'Que incrível, você gostaria de compartilhar seu conhecimento';
  subtitle = 'Primeiro passo é preencher o formulário';
  registrationForm: FormGroup;
  techTypes = [
    'Front End',
    'Back End',
    'Data Science',
    'Machine Learning',
    'Cyber Security',
    'Software Architecture',
  ];
  isLoading = false;

  emailValidator(length: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const email = control.value;
      if (email) {
        const localPart = email.split('@')[0];
        if (localPart.length !== length) {
          return {
            localPartLength: {
              requiredLength: length,
              actualLength: localPart.length,
            },
          };
        }
      }
      return null;
    };
  }
  //constructor
  constructor(
    private fb: FormBuilder,
    private apiSerive: ApiService,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, this.emailValidator(4)],
      ],
      techType: ['', [Validators.required]],
      classTitle: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  startLoading() {
    this.isLoading = true;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formValue = this.registrationForm.value;
      const newRegistration = new ClassRegistration(
        formValue.name,
        formValue.email,
        formValue.techType,
        formValue.classTitle,
        formValue.description
      );

      this.apiSerive.postData(mapToEntity(newRegistration)).subscribe({
        next: () => this.router.navigate(['available-classes']),
        error: (err) => console.log('deu ruim!'),
      });
    }
    this.isLoading = false;
  }
  

}
