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
  selector: 'app-node',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './node.html'
})
export class NodeComponent {
  private app = inject(App);

  techStacks: TechStack[] = [
    {
      title: 'Build Tooling & Bundlers',
      version: 'VITE / WEBPACK',
      description: 'Orchestrating fast client-side compilation environments and hot-module replacement systems to maximize frontend development cycles.',
      features: ['Tree Shaking', 'Asset Optimization', 'Dynamic Code Splitting']
    },
    {
      title: 'Server-Side Rendering (SSR)',
      version: 'FULL-STACK CORE',
      description: 'Configuring Node-based execution layers to render layout frameworks prior to client delivery, optimizing platform performance metrics.',
      features: ['Isomorphic JavaScript', 'Hydration Management', 'Middleware Filters']
    },
    {
      title: 'Package & Script Automation',
      version: 'NPM / PNPM',
      description: 'Managing intricate third-party component modules, dependency version control pipelines, and customized continuous execution script pipelines.',
      features: ['Lockfile Security', 'Workspace Isolation', 'Automated Task Run']
    }
  ];

  clientBenefits: Benefit[] = [
    {
      icon: '⚡',
      title: 'Lighter Application Payload',
      description: 'Optimizing development build configurations to strip unreferenced framework logic, resulting in smaller browser download steps.'
    },
    {
      icon: '🔄',
      title: 'Unified Language Framework',
      description: 'Using JavaScript or TypeScript across compilation steps and interactive client code templates to streamline resource distribution.'
    },
    {
      icon: '🚀',
      title: 'Accelerated Build Velocities',
      description: 'Utilizing modern caching structures to reduce localized development startup delays and background processing overhead.'
    }
  ];

  goToPortfolio() {
    this.app.navigateTo('portfolio');
  }

  goToContact() {
    this.app.navigateTo('contact', 'secure-portal');
  }
}
