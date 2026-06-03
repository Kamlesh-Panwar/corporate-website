import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html'
})
export class AboutComponent {

  @Output() connect = new EventEmitter<void>();

  onConnect() {
    this.connect.emit();
  }

}
