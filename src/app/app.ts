import { Component, PLATFORM_ID, inject, NgZone, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'corporate-website';

  words: string[] = ['Design', 'Build', 'Serve'];
  currentWord: string = 'Design';

  private wordIndex: number = 0;
  private isDeleting: boolean = false;
  private txt: string = 'Design';

  private platformId = inject(PLATFORM_ID);
  private ngZone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);

  constructor() {
    // Safely verify browser access to bypass hydration conflicts
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.syncTypewriter();
      }, 1000);
    }
  }

  private syncTypewriter() {
    this.ngZone.run(() => {
      const fullWord = this.words[this.wordIndex];

      if (this.isDeleting) {
        this.txt = fullWord.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullWord.substring(0, this.txt.length + 1);
      }

      // Safeguard: If blank, insert a non-breaking space to lock text line-height
      this.currentWord = this.txt === '' ? '\u00A0' : this.txt;
      this.cdr.detectChanges();

      let dynamicSpeed = this.isDeleting ? 50 : 100;

      if (!this.isDeleting && this.txt === fullWord) {
        dynamicSpeed = 2000; // Keep full word static for 2 seconds
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length; // Step forward smoothly
        dynamicSpeed = 300; // Rest brief moment at blank canvas
      }

      setTimeout(() => {
        this.syncTypewriter();
      }, dynamicSpeed);
    });
  }
}
