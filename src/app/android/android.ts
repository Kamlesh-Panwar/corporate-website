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
  selector: 'app-android',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './android.html'
})
export class AndroidComponent {
  private app = inject(App);

  activeCategory: string = 'Languages & Core Web';

  techStacks: TechStack[] = [
    {
      title: 'Kotlin & Jetpack Compose',
      version: 'KOTLIN 2.0',
      description: 'Building performance-optimized smartphone interfaces using declarative architectural states, clean rendering modules, and lightweight component rendering pipelines.',
      features: ['Coroutines Asynchronous Engine', 'Structured State Hoisting', 'Material Design 3 Compliance']
    },
    {
      title: 'Room Database & Local Cache',
      version: 'DATA REPOSITORY',
      description: 'Abstracting complex local storage access points with safe relational verification rules, automated background worker synchronizations, and reactive stream triggers.',
      features: ['SQLite Dynamic Mapping', 'LiveData & Flow Integrations', 'Automated Type Converters']
    },
    {
      title: 'Dagger Hilt & Clean Architecture',
      version: 'DEPENDENCY INJECTION',
      description: 'Decoupling application code layers cleanly into isolated presentation, domain, and data worker boundaries to achieve premium structural test coverage parameters.',
      features: ['Hilt ViewModels', 'Automated Code Generation', 'Decoupled Repository Layers']
    }
  ];

  clientBenefits: Benefit[] = [
    {
      icon: '📈',
      title: 'Massive Global Reach',
      description: 'Targeting the dominant international mobile operating system ecosystem to secure maximum marketplace user onboarding metrics.'
    },
    {
      icon: '🎨',
      title: 'Tailored UI Customization',
      description: 'Leveraging highly adaptable interface layers and open hardware controls to compile specialized features exactly to your enterprise roadmap specifications.'
    },
    {
      icon: '🚀',
      title: 'Rapid Verification & Launch',
      description: 'Accelerating release cycle cadences using dynamic Google Play delivery channels and streamlined cloud automated integration setups.'
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
