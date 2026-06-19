import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html'
})
export class ContactComponent {

  sendViaWhatsApp(name: string, email: string, mobile: string, subject: string, message: string) {
    if (!name || !email || !mobile || !subject || !message) {
      alert('Please fill in all details before transmitting via WhatsApp.');
      return;
    }

    const companyNumber = '918982373618';
    const structuredText =
      `NIMBAD INFOTECH \n` +
      `*1. CONTACT INFORMATION*\n` +
      `• Name: ${name.trim()}\n` +
      `• Email: ${email.trim()}\n` +
      `• Mobile: ${mobile.trim()}\n\n` +
      `*2. INQUIRY SPECIFICATIONS*\n` +
      `• Subject: ${subject.trim()}\n\n` +
      `*3. CLIENT MESSAGE BODY*\n` +
      `"${message.trim()}"\n\n`; 

    const encryptedPayload = encodeURIComponent(structuredText);
    window.open(`https://api.whatsapp.com/send?phone=${companyNumber}&text=${encryptedPayload}`, '_blank');
  }

}
