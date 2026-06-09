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
  selector: 'app-java',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './java.html'
})
export class JavaComponent {
  private app = inject(App);

  techStacks: TechStack[] = [
    {
      title: 'Spring Boot & Spring MVC',
      version: 'SPRING 6 / BOOT 3',
      description: 'Architecting ultra-reliable microservices and production-ready RESTful web APIs leveraging decoupled dependency injection principles.',
      features: ['Spring Web', 'Embedded Tomcat', 'Actuator Metrics']
    },
    {
      title: 'Hibernate ORM & JPA',
      version: 'DATA ENGINE',
      description: 'Abstracting database interaction models with strict transactional isolation rules, entity relationship caching, and optimized data stream mapping.',
      features: ['Criteria API', 'Second-Level Cache', 'JPQL Optimization']
    },
    {
      title: 'Spring Security & OAuth2',
      version: 'ENTERPRISE DEFENSE',
      description: 'Implementing rigid security filters including centralized role-based access tokens, stateful session configurations, and end-to-end cryptographic layers.',
      features: ['JWT Authentication', 'CORS/CSRF Filters', 'Method-Level Security']
    }
  ];

  clientBenefits: Benefit[] = [
    {
      icon: '⚙️',
      title: 'Platform Independence',
      description: 'Running compiled Java bytecode reliably across any cloud operating environment or infrastructure pipeline using the stable virtual machine runtime.'
    },
    {
      icon: '📈',
      title: 'Massive Scalability Options',
      description: 'Handling millions of concurrent operations seamlessly using highly efficient thread execution models and modern asynchronous processing algorithms.'
    },
    {
      icon: '🛡️',
      title: 'Resilient Security Baselines',
      description: 'Leveraging strict type safety checks, memory boundaries, and continuous updates from a massive, proven open-source governance matrix.'
    }
  ];

  goToPortfolio() {
    this.app.navigateTo('portfolio');
  }

  goToContact() {
    this.app.navigateTo('contact', 'secure-portal');
  }
}
