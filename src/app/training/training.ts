import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from '../app';

interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  icon: string;
}

interface Track {
  title: string;
  badge: string;
  description: string;
  skills: string[];
}

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './training.html'
})
export class TrainingComponent {
  private app = inject(App);

  pillars: Pillar[] = [
    {
      number: '01',
      icon: '💻',
      title: 'Industry-Level Practical Training',
      subtitle: 'From Fundamentals to Live Projects',
      description: 'Zero to hero approach designed for college students. Start with strong programming foundations and advance step-by-step to building real-world enterprise projects.',
      points: [
        'Programming Logic & Clean Coding Habits',
        'Database Design & Hands-On CRUD Applications',
        'Git Version Control & Project Collaboration'
      ]
    },
    {
      number: '02',
      icon: '🎯',
      title: 'Interview Preparation',
      subtitle: 'Crack Your Campus & Off-Campus Drives',
      description: 'Structured training tailored to help fresh graduates crack initial screening rounds, technical aptitude, live coding assessments, and direct interview questions.',
      points: [
        'Core Data Structures & Algorithmic Problem Solving',
        '1-on-1 Mock Interviews with Detailed Feedback',
        'Fresher Resume Building & GitHub Profile Setup'
      ]
    },
    {
      number: '03',
      icon: '✨',
      title: 'Personality Development & Soft Skills',
      subtitle: 'Speak with Confidence',
      description: 'Transform from a college student into a confident professional. Learn how to introduce yourself, answer behavioral HR questions, and communicate clearly in interviews.',
      points: [
        'Self-Introduction & Elevator Pitch Practice',
        'Professional Communication & Email Etiquette',
        'Group Discussions & Overcoming Hesitation'
      ]
    },
    {
      number: '04',
      icon: '🏢',
      title: 'Corporate Culture & Lifestyle Transition',
      subtitle: 'Day-One Workplace Ready',
      description: 'Understand how modern IT companies function before joining your first job. Learn agile sprint culture, daily standups, and professional workplace etiquette.',
      points: [
        'Agile, Scrum & Task Management Basics',
        'Workplace Professionalism & Team Ethics',
        'Real-world Corporate Workflow Simulation'
      ]
    }
  ];

  tracks: Track[] = [
    {
      title: 'Full-Stack .NET Development',
      badge: 'High Demand',
      description: 'Start from core C# and OOP programming, master ASP.NET Core Web APIs, SQL Server database design, and build responsive full-stack applications with Angular.',
      skills: ['C# Fundamentals', 'ASP.NET Core Web API', 'SQL Server & Queries', 'Angular / React Basics']
    },
    {
      title: 'MERN Stack Web Development',
      badge: 'Beginner Friendly',
      description: 'Master complete full-stack web development with JavaScript. Build dynamic apps from scratch using MongoDB, Express.js, React, and Node.js with REST APIs.',
      skills: ['JavaScript & TypeScript', 'React.js Components', 'Node.js & Express', 'MongoDB Database']
    },   
    {
      title: 'Frontend & UI/UX Engineering',
      badge: 'Creative Tech',
      description: 'Designed for students who love building clean, interactive user interfaces. Learn modern responsive web design, Tailwind CSS, TypeScript, and frontend frameworks.',
      skills: ['HTML5, CSS3 & Tailwind', 'JavaScript & TypeScript', 'Angular / React Basics', 'UI/UX Design Concepts']
    },
    {
      title: 'AI / ML & Data Science',
      badge: 'Future Tech',
      description: 'A beginner-tailored pathway into Artificial Intelligence. Learn Python programming from scratch, data analysis, core machine learning algorithms, and AI model usage.',
      skills: ['Python from Basics', 'Data Analysis (Pandas/NumPy)', 'Agentic AI & RAG', 'Core ML Algorithms', 'Intro to GenAI & APIs']
    },
    {
      title: 'Cloud & DevOps Foundations',
      badge: 'Core Infra',
      description: 'Understand how web applications are hosted and deployed on the internet. Learn cloud computing basics, Git workflows, Docker essentials, and CI/CD pipelines.',
      skills: ['Git & GitHub Basics', 'Azure / AWS Fundamentals', 'Docker Essentials', 'CI/CD Deployment Basics']
    }
  ];

  goToContact() {
    this.app.navigateTo('contact');
  }

  enquireViaWhatsApp() {
    const phoneNumber = '918982373618';
    const message = encodeURIComponent(
      `Hello Nimbad Infotech,\n\n` +
      `I am a student/fresher and I am interested in your *IT Training & Corporate Readiness Program*.\n` +
      `Please share details regarding batch schedules, course tracks, and free career counselling.`
    );
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
  }
}
