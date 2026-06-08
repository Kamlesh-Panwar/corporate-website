import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App } from '../app';

@Component({
  selector: 'app-custom-software',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-software.html'
})
export class CustomSoftwareComponent {
  private app = inject(App);

  goToContact() {
    this.app.navigateTo('contact', 'secure-portal');
  }
}
