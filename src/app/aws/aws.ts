import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from '../app';

interface AwsServiceItem {
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
  selector: 'app-aws',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aws.html'
})
export class AwsComponent {
  private app = inject(App);

  activeCategory: string = 'Languages & Core Web';

  awsServices: AwsServiceItem[] = [
    {
      title: 'Amazon S3 & CloudFront',
      type: 'STORAGE & CDN',
      description: 'Deploying highly durable static asset hosting solutions coupled with low-latency global delivery networks. Engineered for secure edge-caching frameworks.',
      features: ['99.999999999% Durability', 'Edge Token Authentication', 'Intelligent Tiering Optimization']
    },
    {
      title: 'AWS Lambda & API Gateway',
      type: 'SERVERLESS COMPUTE',
      description: 'Architecting fully decoupled auto-scaling REST or WebSocket APIs. Eliminates background resource maintenance workloads by processing request payloads on-demand.',
      features: ['Provisioned Concurrency', 'Custom Authorizers', 'VPC Native Execution']
    },
    {
      title: 'Amazon RDS & DynamoDB',
      type: 'CLOUD DATABASES',
      description: 'Integrating structured relational engines or ultra-fast non-relational NoSQL key-value pipelines designed to process transactional cloud information at scale.',
      features: ['Automated Read-Replicas', 'Point-In-Time Recovery', 'Global Table Replication']
    }
  ];

  clientBenefits: Benefit[] = [
    {
      icon: '🌐',
      title: 'Global Footprint Presence',
      description: 'Deploying application backends across multiple international availability zones to optimize response latency and ensure continuity profiles.'
    },
    {
      icon: '🛡️',
      title: 'Rigorous IAM Security',
      description: 'Enforcing granular permission layers via Identity & Access Management rules, VPC isolation policies, and hardware-backed KMS data encryption keys.'
    },
    {
      icon: '⚙️',
      title: 'Elastic Auto-Scaling Runtimes',
      description: 'Dynamically provision infrastructure power allotments automatically during heavy user request events to retain seamless response metrics.'
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
