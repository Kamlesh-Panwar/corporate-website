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
  selector: 'app-angular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular.html'
})
export class AngularComponent {
  private app = inject(App);

  techStacks: TechStack[] = [
    {
      title: 'Signals & Declarative UI',
      version: 'ANGULAR 18/19',
      description: 'Implementing highly optimized fine-grained reactive updates using native Angular Signals to eliminate redundant change-detection calculation trees.',
      features: ['Signal States', 'Computed Properties', 'Effect Observers']
    },
    {
      title: 'RxJS Streams & State Services',
      version: 'REACTIVE CORE',
      description: 'Architecting predictable, asynchronous data streams and unified state storage instances to manage complex business rule boundaries efficiently.',
      features: ['Observable Pipelines', 'Subject Event Handling', 'NgRx Store Blueprints']
    },
    {
      title: 'Standalone Components & Router',
      version: 'ARCHITECTURE',
      description: 'Constructing scalable lightweight applications utilizing strict standalone component constraints, functional route guards, and lazy-loaded code bundles.',
      features: ['Deferrable Views', 'Functional Guards', 'SSR & Hydration Engines']
    }
  ];

  clientBenefits: Benefit[] = [
    {
      icon: '🛡️',
      title: 'Strict TypeScript Security',
      description: 'Enforcing precise object type limits and native design paradigms straight out of the box to drastically minimize regression bugs across enterprise codebases.'
    },
    {
      icon: '⚙️',
      title: 'Complete Batteries-Included Core',
      description: 'Accelerating feature roadmap development metrics using built-in system forms validation, HTTP clients, and structured command line configuration tools.'
    },
    {
      icon: '🏢',
      title: 'Google-Backed Long-Term Scalability',
      description: 'Securing structural investment longevity via predictable, automated framework migration paths and major tech governance structures.'
    }
  ];

  goToPortfolio() {
    this.app.navigateTo('portfolio');
  }

  goToContact() {
    this.app.navigateTo('contact', 'secure-portal');
  }
}
