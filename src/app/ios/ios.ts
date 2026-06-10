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
  selector: 'app-ios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ios.html'
})
export class IosComponent {
  private app = inject(App);

  activeCategory: string = 'Languages & Core Web';

  techStacks: TechStack[] = [
    {
      title: 'Swift & SwiftUI Architecture',
      version: 'SWIFT 6.0',
      description: 'Engineering fluid user interfaces and declarative screen state machines optimized for fast UI layout updates and efficient device CPU threads.',
      features: ['Swift Concurrency', 'Combine State Tracking', 'Custom Layout Protocol']
    },
    {
      title: 'Core Data & Local Storage',
      version: 'DATA ARCHITECTURE',
      description: 'Managing intricate offline application data persistence with safe relational sync patterns, background data parsing, and low memory mapping layers.',
      features: ['NSPersistentContainer', 'Context Thread Isolation', 'Predicate Optimizations']
    },
    {
      title: 'iOS Security & Device Hardware',
      version: 'HARDWARE ACCESS',
      description: 'Enforcing biometric protection filters, hardware keychain token vaults, and secure data exchange layers with server endpoints.',
      features: ['FaceID / TouchID API', 'Keychain Cryptography', 'App Sandbox Compliance']
    }
  ];

  clientBenefits: Benefit[] = [
    {
      icon: '💎',
      title: 'Premium User Engagement',
      description: 'Targeting a high-conversion consumer demographic characterized by robust user interaction metrics and reliable monetization pipelines.'
    },
    {
      icon: '⚡',
      title: 'Flawless Fluid Performance',
      description: 'Achieving continuous 60/120 FPS rendering and rapid application start speeds using compiled native binary code optimized for Apple chips.'
    },
    {
      icon: '🔒',
      title: 'Rigorous Privacy Protections',
      description: 'Adhering to strict App Store permission guidelines and hardware data sandbox structures to guarantee comprehensive data protection compliance.'
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
