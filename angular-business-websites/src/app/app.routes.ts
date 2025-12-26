import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LeadAutomationComponent } from './pages/lead-automation/lead-automation.component';
import { WebsiteDevelopmentComponent } from './pages/website-development/website-development.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lead-automation', component: LeadAutomationComponent },
  { path: 'website-development', component: WebsiteDevelopmentComponent },
  { path: 'privacy', component: PrivacyComponent }
];
