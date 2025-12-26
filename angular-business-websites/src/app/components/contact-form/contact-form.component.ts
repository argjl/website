import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  form;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [ Validators.email]],
      message: ['', Validators.required],
    });
  }

  async submit() {
    if (this.form.valid) {
      const formData = {
        ...this.form.value,
        source: "Website",
        date: new Date().toISOString()
      };

      // Prod URL
      try {
        const res = await fetch("https://n8n-latest-ul7q.onrender.com/webhook/d380aa10-208e-4f78-a8f0-c311a70501cf", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

        // Stage url
      // try {
      //   const res = await fetch("https://n8n-latest-ul7q.onrender.com/webhook-test/d380aa10-208e-4f78-a8f0-c311a70501cf", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(formData)
      //   });

        if (res.ok) {
          this.successMessage = "Thanks! We will contact you shortly.";
          this.errorMessage = '';
          this.form.reset();
        } else {
          this.errorMessage = "Something went wrong.";
          this.successMessage = '';
        }
      } catch {
        this.errorMessage = "Network error.";
        this.successMessage = '';
      }

      // Clear messages after 3 seconds
      setTimeout(() => {
        this.successMessage = '';
        this.errorMessage = '';
      }, 3000);
    }
  }
}