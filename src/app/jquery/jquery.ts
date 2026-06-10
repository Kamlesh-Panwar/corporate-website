import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from '../app';

interface TechStack {
  title: string;
  version: string;
  description: string;
  features: string[];
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-jquery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jquery.html'
})
export class JqueryComponent {
  private app = inject(App);

  techStacks: TechStack[] = [
    {
      title: 'DOM Manipulation & Selection',
      version: 'CORE SIZZLE ENGINE',
      description: 'Simplifying element lookup pathways and dynamic DOM alterations through concise CSS-style selection matrices and safe cascading token chains.',
      features: ['Chained Method Operations', 'Dynamic Node Injection', 'Attribute Mutation Mapping']
    },
    {
      title: 'Cross-Browser Event Handling',
      version: 'EVENT UI MODULE',
      description: 'Normalizing browser action anomalies under a unified event listener architecture featuring automatic event delegation patterns.',
      features: ['Normalized Event Objects', 'Delegated Event Triggers', 'Custom Event Namespaces']
    },
    {
      title: 'Asynchronous AJAX Utilities',
      version: 'ASYNC HTTP DATA',
      description: 'Configuring lightweight server communication loops with automated payload parsing controls, header injection layers, and strict error timeouts.',
      features: ['Deferred Promise Objects', 'Global AJAX Hooks', 'JSONP Cross-Domain Support']
    }
  ];

  clientBenefits: Benefit[] = [
    {
      icon: '🦅',
      title: 'Concise Syntax Model',
      description: 'Writing minimal functional script statements to handle complex user browser controls, compressing baseline front-end asset lines.'
    },
    {
      icon: '🛡️',
      title: 'Proven Enterprise Stability',
      description: 'Leveraging an industry-standard implementation framework tested continuously across billions of live corporate production sites.'
    },
    {
      icon: '⚡',
      title: 'Zero Compiler Overhead',
      description: 'Eliminating bulky frontend compilation pipelines, build steps, or layout transpilation environments for lightweight web systems.'
    }
  ];

  goToPortfolio() {
    this.app.navigateTo('portfolio');
  }

  goToContact() {
    this.app.navigateTo('contact', 'secure-portal');
  }
}
