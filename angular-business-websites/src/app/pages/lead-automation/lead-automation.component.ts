import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lead-automation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lead-automation.component.html',
  styleUrl: './lead-automation.component.scss'
})
export class LeadAutomationComponent {
  automationWorkflows = [
    {
      title: 'Lead Capture & Qualification',
      description: 'Automatically capture leads from your website forms and instantly qualify them based on predefined criteria.',
      icon: '📋',
      details: [
        'Collect form submissions automatically',
        'Score leads based on engagement',
        'Categorize by industry and budget',
        'Filter out low-quality leads'
      ]
    },
    {
      title: 'Email Nurturing Sequences',
      description: 'Send targeted, personalized email campaigns automatically based on lead behavior and interests.',
      icon: '📧',
      details: [
        'Trigger automated email sequences',
        'Personalize with dynamic content',
        'Follow up based on engagement',
        'Track opens and clicks automatically'
      ]
    },
    {
      title: 'CRM Integration',
      description: 'Sync all lead data directly to your CRM system in real-time for seamless team collaboration.',
      icon: '🔗',
      details: [
        'Auto-sync to HubSpot, Pipedrive, etc.',
        'Update lead status automatically',
        'Create tasks for sales team',
        'Eliminate manual data entry'
      ]
    },
    {
      title: 'SMS & Notification Alerts',
      description: 'Get instant notifications when high-quality leads arrive so your team can respond immediately.',
      icon: '📱',
      details: [
        'SMS alerts for hot leads',
        'Slack/Teams notifications',
        'Email alerts to sales team',
        'Custom trigger rules'
      ]
    },
    {
      title: 'Lead Scoring & Ranking',
      description: 'Automatically score and prioritize leads so your sales team focuses on the most valuable prospects.',
      icon: '⭐',
      details: [
        'Track page visits & engagement',
        'Score based on custom rules',
        'Identify ready-to-buy signals',
        'Hot lead identification'
      ]
    },
    {
      title: 'Document & Proposal Generation',
      description: 'Automatically generate and send personalized proposals and documents to qualified leads.',
      icon: '📄',
      details: [
        'Create proposals from templates',
        'Personalize with lead data',
        'Send via email automatically',
        'Track document engagement'
      ]
    }
  ];

  processSteps = [
    {
      step: '1',
      title: 'Lead Arrives',
      description: 'A potential customer fills your contact form or lands on your website'
    },
    {
      step: '2',
      title: 'Instant Capture',
      description: 'n8n captures the lead data in real-time without any delay'
    },
    {
      step: '3',
      title: 'Qualification',
      description: 'Automated rules analyze and score the lead quality'
    },
    {
      step: '4',
      title: 'CRM Entry',
      description: 'Lead is automatically added to your CRM system'
    },
    {
      step: '5',
      title: 'Notifications',
      description: 'Your sales team gets instant alerts about hot leads'
    },
    {
      step: '6',
      title: 'Nurturing',
      description: 'Automated email sequences start nurturing the lead'
    }
  ];

  benefits = [
    {
      title: 'Never Miss a Lead',
      description: 'Capture every inquiry instantly, 24/7, without manual work'
    },
    {
      title: '10x Faster Response',
      description: 'Follow up with leads in minutes, not days'
    },
    {
      title: 'Higher Conversion',
      description: 'Focus on quality leads that are ready to buy'
    },
    {
      title: 'Save Time & Money',
      description: 'Eliminate 80% of manual data entry and follow-ups'
    },
    {
      title: 'Better Data Quality',
      description: 'Automated validation ensures clean, accurate data'
    },
    {
      title: 'Real-Time Insights',
      description: 'Track lead performance and optimize continuously'
    }
  ];
}