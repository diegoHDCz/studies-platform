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
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { ClassRegistration } from '../models/classRegistration';

@Component({
  selector: 'app-class-registration',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule, HeaderComponent],
  templateUrl: './class-registration.component.html',
  styleUrl: './class-registration.component.css',
})
export class ClassRegistrationComponent {
  title = 'Que incrível, você gostaria de compartilhar seu conhecimento'
  subtitle = 'Primeiro passo é preencher o formulário'
  registrationForm: FormGroup;
  techTypes = [
    'Front End',
    'Back End',
    'Data Science',
    'Machine Learning',
    'Cyber Security',
    'Software Architecture',
  ];
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
  constructor(private fb: FormBuilder) {
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

  ngOnInit(): void {}

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
      console.log('Form Submitted', newRegistration);
    } else {
      console.log('Form not valid');
    }
  }
  // MOSTRAR O HTMX ENGINE.
  // TRAZER OUTRA FORMA DE FORM 
  //todo -> vanilla JS Comparar
  //melhorar a explicação do OOP
}
