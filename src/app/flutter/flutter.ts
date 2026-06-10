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
  selector: 'app-flutter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flutter.html'
})
export class FlutterComponent {
  private app = inject(App);

  activeCategory: string = 'Languages & Core Web';

  techStacks: TechStack[] = [
    {
      title: 'Dart Engine & Framework Core',
      version: 'FLUTTER 3.x',
      description: 'Compiling structured multi-platform code architectures directly into high-performance native machine binaries using ahead-of-time parsing tools.',
      features: ['Sound Null Safety', 'Asynchronous Streams', 'Isolate Threading']
    },
    {
      title: 'State Management Foundations',
      version: 'ARCHITECTURES',
      description: 'Enforcing clean layout rendering loops and unidirectional application operational logic flows across complex interactive user views.',
      features: ['BLoC & Cubit Patterns', 'Riverpod Providers', 'Reactive State Bindings']
    },
    {
      title: 'Impeller & Skia Graphics',
      version: 'RENDERING ENGINE',
      description: 'Leveraging hardware-accelerated graphics pipelines to provide flawless transitions and layout animations entirely free of runtime processing lags.',
      features: ['Custom Paint Canvas', 'Dynamic Custom Shaders', '60/120 FPS Execution']
    }
  ];

  clientBenefits: Benefit[] = [
    {
      icon: '📱',
      title: 'Single Shared Codebase',
      description: 'Compiling premium desktop, web, Android, and iOS software views simultaneously from one optimized, centralized code module.'
    },
    {
      icon: '⏱️',
      title: 'Accelerated Market Entry',
      description: 'Reducing timeline metrics significantly by utilizing hot-reload layouts to design and test architectural changes on live target platforms.'
    },
    {
      icon: '🪙',
      title: 'Minimized Budget Overhead',
      description: 'Cutting resource engineering and application management expenses in half by maintaining a unified cross-platform project team blueprint.'
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
