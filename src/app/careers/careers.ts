import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from '../app';

interface InterviewRound {
  step: string;
  title: string;
  description: string;
}

interface EmployeeBenefit {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './careers.html'
})
export class CareersComponent {
  private app = inject(App);

  interviewRounds: InterviewRound[] = [
    {
      step: '01',
      title: 'Resume Reviewing & Candidate Shortlisting',
      description: 'Our talent acquisition engineering filter reviews background profiles to evaluate stack capabilities against our architectural roadmap standards.'
    },
    {
      step: '02',
      title: 'Coding Evaluation Test',
      description: 'Candidates execute an asynchronous algorithmic coding exercise designed to test core logical parsing capacities and clean clean-code principles.'
    },
    {
      step: '03',
      title: 'In-Depth Technical Interview',
      description: 'An expansive architectural system deep-dive evaluation with our senior technical engineering team testing design patterns and data frameworks.'
    },
    {
      step: '04',
      title: 'Comprehensive HR Round',
      description: 'Final alignment stage evaluating workplace behavioral dynamics, cultural match parameters, communication metrics, and corporate growth objectives.'
    }
  ];

  employeeBenefits: EmployeeBenefit[] = [
    {
      icon: '⭐',
      title: 'Dynamic Career',
      description: 'Utilize your skills and grab opportunities to build a successful career doing what you love within a collaborative high-growth engineering environment.'
    },
    {
      icon: '🌱',
      title: 'Personal Growth',
      description: 'Pursue your individual goals with a professional infrastructure team that respects and actively supports your ongoing desire for structural self-refinement.'
    },
    {
      icon: '🎓',
      title: 'Learning & Mentorship',
      description: 'Improve your programming skills by working closely alongside certified elite system architects across complex, diverse product delivery projects.'
    },
    {
      icon: '🏅',
      title: 'Latest Technologies',
      description: 'Face rewarding scaling challenges and implement your innovative architecture ideas using modern cutting-edge enterprise design frameworks.'
    }
  ];

  goToContact() {
    this.app.navigateTo('contact', 'contact-form');
  }
}
