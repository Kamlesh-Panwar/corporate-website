import { Component, PLATFORM_ID, inject, NgZone, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AboutComponent } from './about/about';
import { PortfolioComponent } from './portfolio/portfolio';
import { ContactComponent } from './contact/contact';
import { CustomSoftwareComponent } from './custom-software/custom-software';
import { SaasDevelopmentComponent } from './saas-development/saas-development';
import { CloudConsultingComponent } from './cloud-consulting/cloud-consulting';
import { MobileArchitectureComponent } from './mobile-architecture/mobile-architecture';
import { AiMlComponent } from './ai-ml/ai-ml';
import { UiUxDesignComponent } from './ui-ux-design/ui-ux-design';
import { DotnetComponent } from './dotnet/dotnet';
import { JavaComponent } from './java/java';
import { NodejsComponent } from './nodejs/nodejs';
import { AzureComponent } from './azure/azure';
import { AwsComponent } from './aws/aws';
import { IosComponent } from './ios/ios';
import { AndroidComponent } from './android/android';
import { FlutterComponent } from './flutter/flutter';
import { ReactComponent } from './react/react';
import { AngularComponent } from './angular/angular';
import { NodeComponent } from './node/node';
import { BootstrapComponent } from './bootstrap/bootstrap';
import { JavascriptComponent } from './javascript/javascript';
import { JqueryComponent } from './jquery/jquery';



@Component({
  selector: 'app-root',
  imports: [AboutComponent, PortfolioComponent, ContactComponent, CustomSoftwareComponent, SaasDevelopmentComponent,
    CloudConsultingComponent, MobileArchitectureComponent, AiMlComponent, UiUxDesignComponent,
    DotnetComponent, JavaComponent, NodejsComponent, AzureComponent, AwsComponent, IosComponent, AndroidComponent,
    FlutterComponent, ReactComponent, AngularComponent, NodeComponent, BootstrapComponent, JavascriptComponent, JqueryComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'corporate-website';
  currentPage: string = 'home';
  isMobileMenuOpen: boolean = false;

  navigateTo(page: string, sectionId?: string) {
    this.currentPage = page;
    this.isMobileMenuOpen = false;
    this.cdr.detectChanges();

    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.cdr.detectChanges();
  }

  words: string[] = ['Design', 'Build', 'Serve'];
  currentWord: string = 'Design';

  private wordIndex: number = 0;
  private isDeleting: boolean = false;
  private txt: string = 'Design';

  private platformId = inject(PLATFORM_ID);
  private ngZone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);

  constructor() {
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

      this.currentWord = this.txt === '' ? '\u00A0' : this.txt;
      this.cdr.detectChanges();

      let dynamicSpeed = this.isDeleting ? 50 : 100;

      if (!this.isDeleting && this.txt === fullWord) {
        dynamicSpeed = 2000; 
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length; 
        dynamicSpeed = 300; 
      }

      setTimeout(() => {
        this.syncTypewriter();
      }, dynamicSpeed);
    });
  }
}
