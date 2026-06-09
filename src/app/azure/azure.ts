import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from '../app';

interface AzureServiceItem {
  title: string;
  type: string;
  description: string;
  features: string[];
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface TechItem {
  name: string;
  icon: string;
  colorClass: string;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

@Component({
  selector: 'app-azure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './azure.html'
})
export class AzureComponent {
  private app = inject(App);

  activeCategory: string = 'Languages & Core Web';

  azureServices: AzureServiceItem[] = [
    {
      title: 'Azure Blob Storage',
      type: 'CLOUD STORAGE',
      description: 'Optimizing isolated storage buckets for highly secure, unstructured object data paradigms. Engineered to handle large-scale document pools and asset rendering pipelines smoothly.',
      features: ['Data Redundancy', 'Granular Access Policies', 'Automated Lifecycle Management']
    },
    {
      title: 'Azure Functions',
      type: 'SERVERLESS COMPUTE',
      description: 'Assembling event-driven micro-workers that execute complex processing tasks instantly on dynamic pipeline triggers without background infrastructure overhead.',
      features: ['HTTP/Timer Triggers', 'Auto-scaling Runtimes', 'Decoupled Bindings']
    },
    {
      title: 'Azure Key Vault',
      type: 'IDENTITY & SECURITY',
      description: 'Enforcing strict application cryptography by managing access keys, database connection tokens, and service URIs securely inside hardware security frameworks.',
      features: ['Secret Encryption', 'Automated Access Logging', 'Seamless App Integration']
    }
  ];

  clientBenefits: Benefit[] = [
    {
      icon: '🛡️',
      title: 'Zero-Trust Cloud Security',
      description: 'Enforcing robust, multi-layer security controls managed continuously by automated monitoring tools to guarantee complete tenant data isolation.'
    },
    {
      icon: '📈',
      title: 'Elastic Scale Allocation',
      description: 'Handling unexpected traffic spikes effortlessly through automated dynamic allocation rules, ensuring application stability at any scale.'
    },
    {
      icon: '📉',
      title: 'Optimized Resource Budgets',
      description: 'Reducing operational infrastructure expenses by utilizing consumption-based pay-as-you-go serverless billing loops.'
    }
  ];

  techCategories: TechCategory[] = [
    {
      title: 'Languages & Core Web',
      items: [
        { name: 'JavaScript', icon: 'JS', colorClass: 'text-amber-500 font-bold' },
        { name: 'Java', icon: '☕', colorClass: 'text-red-500' },
        { name: 'C# Core', icon: '#', colorClass: 'text-purple-600 font-bold' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      items: [
        { name: '.NET', icon: '🔷', colorClass: 'text-blue-500' },
        { name: 'React', icon: '⚛️', colorClass: 'text-cyan-400' },
        { name: 'Angular', icon: '🅰️', colorClass: 'text-red-600' },
        { name: 'Node JS', icon: '🟢', colorClass: 'text-emerald-500' },
        { name: 'jQuery', icon: '🦅', colorClass: 'text-indigo-500' },
        { name: 'Bootstrap', icon: '🟪', colorClass: 'text-purple-500' }
      ]
    },
    {
      title: 'Databases & Caching',
      items: [
        { name: 'SQL Server', icon: '🛢️', colorClass: 'text-rose-500' },
        { name: 'PostgreSQL', icon: '🐘', colorClass: 'text-blue-600' },
        { name: 'MySQL', icon: '🐬', colorClass: 'text-amber-600' },
        { name: 'MongoDB', icon: '🍃', colorClass: 'text-emerald-600' },
        { name: 'Redis', icon: '🟥', colorClass: 'text-red-600' }
      ]
    },
    {
      title: 'Cloud & Mobile Platforms',
      items: [
        { name: 'Azure', icon: '☁️', colorClass: 'text-blue-500' },
        { name: 'AWS', icon: '🟠', colorClass: 'text-amber-500' },
        { name: 'Flutter', icon: '🚀', colorClass: 'text-cyan-500' },
        { name: 'iOS', icon: '🍏', colorClass: 'text-slate-800' },
        { name: 'Android', icon: '🤖', colorClass: 'text-emerald-500' }
      ]
    }
  ];

  selectCategory(categoryTitle: string) {
    this.activeCategory = categoryTitle;
  }

  goToPortfolio() {
    this.app.navigateTo('portfolio');
  }

  goToContact() {
    this.app.navigateTo('contact', 'secure-portal');
  }
}
