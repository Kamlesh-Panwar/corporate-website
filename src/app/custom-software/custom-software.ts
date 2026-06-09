import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from '../app';

interface Capability {
  icon: string;
  bgColor: string;
  textColor: string;
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
  selector: 'app-custom-software',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-software.html'
})
export class CustomSoftwareComponent {
  private app = inject(App);

  activeCategory: string = 'Languages & Core Web';

  capabilities: Capability[] = [
    {
      icon: '⚙️',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      title: 'Enterprise Architecture',
      description: 'Designing solid distributed systems leveraging robust design patterns, secure repository workflows, and efficient relational queries.'
    },
    {
      icon: '☁️',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-600',
      title: 'Cloud-Native Pipelines',
      description: 'Assembling isolated serverless storage buckets, managed key vaults, and optimized back-end data workers across your pipeline infrastructure.'
    },
    {
      icon: '🔌',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      title: 'Secure API Integrations',
      description: 'Developing decoupled, secure web data layers utilizing performance optimization rules to integrate external service targets effortlessly.'
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
