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
  selector: 'app-javascript',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './javascript.html'
})
export class JavascriptComponent {
  private app = inject(App);

  techStacks: TechStack[] = [
    {
      title: 'Modern ECMAScript (ES6+)',
      version: 'CORE ENGINE',
      description: 'Leveraging structural lexical scoping, modular patterns, object destructuring, and advanced array manipulation routines to write highly clean script models.',
      features: ['Arrow Syntax', 'Modules (Import/Export)', 'Optional Chaining']
    },
    {
      title: 'Asynchronous Execution',
      version: 'ASYNC RUNTIME',
      description: 'Architecting non-blocking data fetching mechanisms, parallel execution groups, and clean error isolation handling using modern asynchronous paradigms.',
      features: ['Promises & Await', 'Fetch API Pipelines', 'Event Loop Integration']
    },
    {
      title: 'Web APIs & DOM Manipulation',
      version: 'BROWSER CORE',
      description: 'Interacting directly with browser subsystem layers, local data caching utilities, and optimized event dynamic tracking listeners without framework lag.',
      features: ['Event Delegations', 'LocalStorage Layers', 'Shadow DOM Access']
    }
  ];

  clientBenefits: Benefit[] = [
    {
      icon: '🌐',
      title: 'Universal Runtime Execution',
      description: 'Running flawlessly inside every modern internet browser environment straight out of the box, completely eliminating engine initialization delays.'
    },
    {
      icon: '⚡',
      title: 'Highly Responsive Interfaces',
      description: 'Executing interface operations directly within client viewports to deliver instantaneous visual validation feedback and layout modifications.'
    },
    {
      icon: '🔋',
      title: 'Zero Dependency Weight',
      description: 'Eliminating bulky framework layer parsing times by writing pure, lightweight vanilla implementations optimized for device processing speeds.'
    }
  ];

  goToPortfolio() {
    this.app.navigateTo('portfolio');
  }

  goToContact() {
    this.app.navigateTo('contact', 'secure-portal');
  }
}
