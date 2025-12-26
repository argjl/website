import { Component } from '@angular/core';
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";

@Component({
  selector: 'app-website-development',
  templateUrl: './website-development.component.html',
  styleUrls: ['./website-development.component.scss'],
  imports: [ContactFormComponent]
})
export class WebsiteDevelopmentComponent {
}
