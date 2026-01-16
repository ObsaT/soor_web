import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
step = 1;
form!: FormGroup;

constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    category: ['marathon', Validators.required],
    paymentMethod: ['card']
  });
}


next() { if (this.form.valid) this.step++; }
prev() { this.step = Math.max(1, this.step - 1); }
submit() { if (this.form.valid) alert('Registration submitted'); }
}
