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
  selector: 'app-nodejs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nodejs.html'
})
export class NodejsComponent {
  private app = inject(App);

  techStacks: TechStack[] = [
    {
      title: 'Express.js & NestJS Frameworks',
      version: 'REST & GRAPHQL',
      description: 'Architecting modular backend architectures and highly scalable RESTful services using structured middleware, decorators, and strict type handling.',
      features: ['TypeScript Engine', 'Dependency Injection', 'Interceptors']
    },
    {
      title: 'Asynchronous Event-Driven Runtime',
      version: 'V8 ENGINE CORE',
      description: 'Leveraging non-blocking asynchronous event loops to process high-concurrency requests and lightning-fast transactional computing operations.',
      features: ['Event Loop Architecture', 'Stream Handling', 'Cluster Formations']
    },
    {
      title: 'Prisma ORM & Mongoose',
      version: 'DATA ACCELERATION',
      description: 'Integrating seamlessly with relational and non-relational database architectures via performant query builders, validation schemas, and structural connection pools.',
      features: ['Type-safe Queries', 'Schema Generation', 'Aggregation Pipelines']
    }
  ];

  clientBenefits: Benefit[] = [
    {
      icon: '🚀',
      title: 'Unified Full-Stack Language',
      description: 'Maximizing team velocity and code reusability by utilizing JavaScript or TypeScript across both frontend layouts and backend server engines.'
    },
    {
      icon: '⚡',
      title: 'High-Concurrency Processing',
      description: 'Processing thousands of simultaneous server events with minimal memory overhead, perfectly matching real-time cloud data pipelines.'
    },
    {
      icon: '📦',
      title: 'Extensive Module Ecosystem',
      description: 'Accelerating product delivery metrics using verified packages from the massive, enterprise-supported Node Package Manager (NPM) network.'
    }
  ];

  goToPortfolio() {
    this.app.navigateTo('portfolio');
  }

  goToContact() {
    this.app.navigateTo('contact', 'secure-portal');
  }
}
