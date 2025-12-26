import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  form;
  successMessage = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [ Validators.email]],
      message: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.valid) {
      const formData = this.form.value;
      
      // Get existing submissions from local storage
      let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      
      // Add timestamp to the submission
      const submission = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      
      // Add new submission to array
      submissions.push(submission);
      
      // Save back to local storage
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      
      // Show success message
      this.successMessage = true;
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        this.successMessage = false;
      }, 3000);
      
      // Reset form
      this.form.reset();
      
      console.log('Form submitted and saved!', submission);
    }
  }
}