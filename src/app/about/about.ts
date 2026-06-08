import { Component, Output, EventEmitter, inject } from '@angular/core';
import { App } from '../app';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html'
})
export class AboutComponent {

  private app = inject(App);

  @Output() connect = new EventEmitter<void>();

  onConnect() {
    this.connect.emit();
    this.app.navigateTo('contact', 'secure-portal');
  }

}
