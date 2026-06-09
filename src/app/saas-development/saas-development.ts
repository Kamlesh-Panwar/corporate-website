import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from '../app';

interface SaasService {
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
  selector: 'app-saas-development',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saas-development.html'
})
export class SaasDevelopmentComponent {
  private app = inject(App);

  activeCategory: string = 'Languages & Core Web';

  services: SaasService[] = [
    {
      icon: '💬',
      title: 'SaaS Development Consulting',
      description: 'We follow a carefully thought-out path for implementing multi-tenant architectures using cutting-edge tools, optimized resource pooling setups, and agile deployment schedules without straying from long-term corporate objectives.'
    },
    {
      icon: '📊',
      title: 'SaaS Prototype & Design',
      description: 'Using high-fidelity interactive wireframes and prototypes, our engineering team explores complex behavioural patterns to build optimal cloud layouts that offer highly secure multi-user subscription scaling.'
    },
    {
      icon: '🔧',
      title: 'SaaS Application Modernization & Support',
      description: 'Utilize our modern cloud transition frameworks to migrate legacy software environments into scalable multi-tenant SaaS options with secure API access layers and robust processing speeds.'
    }
  ];

  techCategories: TechCategory[] = [
    {
      title: 'Languages & Core Web',
      items: [
        { name: 'JavaScript', icon: 'JS', colorClass: 'text-amber-500 font-bold' },
        { name: 'Java', icon: '☕', colorClass: 'text-red-500' },
        { name: 'C# Core', icon: '#️', colorClass: 'text-purple-600 font-bold' }
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

  goToContact() {
    this.app.navigateTo('contact', 'secure-portal');
  }
}
