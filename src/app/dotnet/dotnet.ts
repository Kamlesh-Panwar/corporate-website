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
  selector: 'app-dotnet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dotnet.html'
})
export class DotnetComponent {
  private app = inject(App);

  techStacks: TechStack[] = [
    {
      title: 'ASP.NET Core Web API',
      version: '.NET 8/9',
      description: 'Building decoupled RESTful data layers and lightweight backend architectures optimized for high-volume enterprise traffic pipelines.',
      features: ['Minimal APIs', 'JWT Authorization', 'Rate Limiting']
    },
    {
      title: 'Entity Framework Core',
      version: 'ORM Engine',
      description: 'Managing structured SQL Server relational database ecosystems with secure repository layer flows and optimized LINQ data parsing rules.',
      features: ['Fluent API Configuration', 'Migration Management', 'Query Splitting']
    },
    {
      title: 'ASP.NET Core MVC & Blazor',
      version: 'Web UI Framework',
      description: 'Developing highly interactive component assemblies and secure server-rendered enterprise portals featuring optimized state loading.',
      features: ['Razor Component Lifecycle', 'SignalR Real-time Data', 'Model Binding Validation']
    }
  ];

  clientBenefits: Benefit[] = [
    {
      icon: '⚡',
      title: 'Unmatched Runtime Speeds',
      description: 'Leveraging hardware-intrinsic compilation rules and high-throughput execution architecture to minimize application infrastructure operational costs.'
    },
    {
      icon: '🛡️',
      title: 'Enterprise-Grade Defense',
      description: 'Enforcing native cross-site scripting preventions, built-in anti-forgery tokens, and rigid cryptographically secure authentication filters.'
    },
    {
      icon: '☁️',
      title: 'Cross-Platform Deployment',
      description: 'Compiling lightweight server application binaries optimized to scale seamlessly across isolated Azure Linux containers or serverless container app pipelines.'
    }
  ];

  goToPortfolio() {
    this.app.navigateTo('portfolio');
  }

  goToContact() {
    this.app.navigateTo('contact', 'secure-portal');
  }
}
