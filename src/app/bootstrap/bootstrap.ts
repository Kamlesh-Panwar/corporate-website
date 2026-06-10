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
  selector: 'app-bootstrap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bootstrap.html'
})
export class BootstrapComponent {
  private app = inject(App);

  techStacks: TechStack[] = [
    {
      title: 'Responsive Grid & Flexbox Layouts',
      version: 'CORE GRID v5.3',
      description: 'Designing highly pixel-perfect fluid grid matrices based on explicit container parameters, breakpoint rules, and flex layout alignment rows.',
      features: ['Twelve-Column Matrix', 'Auto-Layout Columns', 'Flex Utilities']
    },
    {
      title: 'Component Blueprint System',
      version: 'UI UTILITIES',
      description: 'Leveraging production-ready interface element assemblies like modals, carousels, navigational structures, and drop menus to ensure stable layouts.',
      features: ['Vanilla JS Drivers', 'Accessible ARIA Hooks', 'Custom Utility Classes']
    },
    {
      title: 'SaaS Architecture & Themes',
      version: 'COMPILATION',
      description: 'Modifying internal global variable configurations, map options, and system mixins using customized preprocessor styling trees.',
      features: ['Sass Variable Overrides', 'Utility API Extension', 'CSS Custom Properties']
    }
  ];

  clientBenefits: Benefit[] = [
    {
      icon: '📱',
      title: 'Fluid Mobile-First Logic',
      description: 'Ensuring your application interfaces adjust instantly across all screen display viewports from small mobile layouts up to massive monitors.'
    },
    {
      icon: '⏱️',
      title: 'Rapid Interface Assembly',
      description: 'Accelerating product prototype development metrics using standardized layout grids and structured utility helper classes.'
    },
    {
      icon: '🌐',
      title: 'Cross-Browser Consistency',
      description: 'Eliminating layout anomalies and interface operational faults across modern browsing environments like Chrome, Safari, and Edge.'
    }
  ];

  goToPortfolio() {
    this.app.navigateTo('portfolio');
  }

  goToContact() {
    this.app.navigateTo('contact', 'secure-portal');
  }
}
