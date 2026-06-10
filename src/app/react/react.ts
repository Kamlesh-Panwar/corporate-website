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
  selector: 'app-react',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './react.html'
})
export class ReactComponent {
  private app = inject(App);

  activeCategory: string = 'Languages & Core Web';

  techStacks: TechStack[] = [
    {
      title: 'Next.js & Server-Side Rendering',
      version: 'NEXT.JS 14/15',
      description: 'Implementing high-performance web solutions using hybrid static generation and server rendering layouts to ensure optimized crawlability.',
      features: ['App Router Architecture', 'Server Actions', 'Incremental Regeneration']
    },
    {
      title: 'State Management & Context',
      version: 'DATA FLOW',
      description: 'Architecting predictable centralized state management pipelines tailored for high-concurrency real-time transactional platforms.',
      features: ['Redux Toolkit (RTK)', 'Zustand Store Engines', 'React Context Boundaries']
    },
    {
      title: 'Custom Hooks & Modular UI',
      version: 'ECOSYSTEM CORE',
      description: 'Designing highly re-usable component systems and customized execution hooks optimized to reduce interface calculation overheads.',
      features: ['Virtual DOM Optimization', 'Tailwind Integration', 'Strict Type Checking']
    }
  ];

  clientBenefits: Benefit[] = [
    {
      icon: '⚡',
      title: 'High-Speed Page Speeds',
      description: 'Leveraging Virtual DOM diffing mechanics and automated rendering trees to deliver smooth, instantaneous layout changes for consumers.'
    },
    {
      icon: '📦',
      title: 'Component Reusability',
      description: 'Building projects with clean, encapsulated code modules that significantly lower future development and cross-view integration expenses.'
    },
    {
      icon: '🔍',
      title: 'Premium Search Optimization',
      description: 'Utilizing structural server-rendered layouts to offer high-fidelity data nodes that search engine spiders can crawl effortlessly.'
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
