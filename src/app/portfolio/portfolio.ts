import { Component, inject } from '@angular/core';
import { App } from '../app';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.html'
})
export class PortfolioComponent {
  private app = inject(App);

  goToContact() {
    this.app.navigateTo('contact', 'secure-portal');
  }
}
